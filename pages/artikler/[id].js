import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr'
import Nav from '../../components/Nav/Nav';

// export async function getServerSideProps(context) {
//   const { id } = context.query;
//   const res = await fetch(`https://localhost:3000/articles/${id}`);
//   const data = await res.json();

//   console.log(`Fetched place: ${data.name}`);
//   return { props: { data } };
// }


// export async function getServerSideProps() {
// // const fetcher = async () => {
//   const res = await fetch(`https://localhost:3000/api/articles/${query.id}`)
//   const data = await res.json()

//   if (res.status !== 200) {
//     throw new Error(data.message)
//   }
//   return data
// }

// ------------------------


// const fetcher = async (data) => {
//   const res = await fetch(`https://localhost:3000/api/articles/${data.id}`)
//   const articleData = await res.json()

//   if (res.status !== 200) {
//     throw new Error(articleData.message)
//   }
//   return articleData
// }

// -------------------------

const fetcher = async () => {
  const res = await fetch(`https://localhost:3000/artikler/${data.id}`)
  const articlesData = await res.json()
  const {data} = articlesData;
  return { props: { data } }

  // if (res.status !== 200) {
  //   throw new Error(data.message)
  // }
  // return data
}

// export async function getServerSideProps({params, req, res}) {
//   const response = await fetch(`http://localhost:3000/api/articles/${params.id}`)

//   // so much power!
//   if (!response.ok) {
//     // res.writeHead(302, { Location: '/artikler' })
//     res.end()
//     return {props: {}}
//   }

//   const {data} = await response.json()
  
//   if (data) {
//     return {
//       props: {article: data}
//     }
//   }
// }

export default function ArticlePage () {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => data.id && `/api/articles/${data.id}`,
    fetcher 
  )

  if (error) return ( <div> <p style={{fontSize: "2rem"}}>{error.message}</p> </div> )
  if (!data) return <div><p>Loading...</p></div> 
  console.log(data)

  if (query.data.id === data.id) { return <p>data</p>}
  
  return (
  // const ArticlePage = ({data}) => (
    <>
      <Nav />
      <main className="page">
        {data.map((data) => {
          <h1>
            {data.id}
          </h1>
        })}
        <h1>
          Article details 
          {data.id}
        </h1>
      </main>
    </>
  )

}
// export default ArticlePage

