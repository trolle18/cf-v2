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

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function ArticlePage () {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/articles/${query.id}`,
    fetcher 
  )


  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>


  if (error) return (
  <div> <p style={{fontSize: "2rem"}}>{error.message}</p> </div>
  // console.log(error.message), window.history.back()
  )
  if (!data) return <div><p>Loading...</p></div>
  
  return (
    <>
      <Nav />
      <main className="page">
        <h1>
          Article details 
          {data.id}
        </h1>
      </main>
    </>
  )

}

