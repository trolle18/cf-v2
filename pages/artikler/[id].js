import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Nav from '../../components/Nav/Nav';

// // ----- FETCH WRAPPER ----- //
// function handleResponse (response) {
//   return response.text().then((text) => {
//     const data = text && JSON.parse(text)

//     if (!response.ok) {
//       const error = (data && data.message) || response.statusText
//       return Promise.reject(error)
//     }
//     return data
//   })
// }
// function get (url) {
//   const requestOptions = { method: "GET" }
//   return fetch(url, requestOptions).then(handleResponse)
// }
// function post (url, body) {
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(body),
//   }
//   return fetch(url, requestOptions).then(handleResponse)
// }
// function put (url, body) {
//   const requestOptions = {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(body),
//   }
//   return fetch(url, requestOptions).then(handleResponse)
// }
// function _delete (url) {
//   const requestOptions = { method: "DELETE" }
//   return fetch(url, requestOptions).then(handleResponse)
// }


// const fetchWrapper = {
//   get,
//   post,
//   put,
//   delete: _delete,
// }

// // ----- ARTICLE SERVICE ----- //
// const apiUrl = window.location.href
// const baseUrl = `${apiUrl}/articles`

// function getAll () {
//   return fetchWrapper.get(baseUrl)
// }
// function getById (id) {
//   return fetchWrapper.get(`${baseUrl}/${id}`)
// }
// function create (params) {
//   return fetchWrapper.post(baseUrl, params)
// }
// function update (id, params) {
//   return fetchWrapper.put(`${baseUrl}/${id}`, params)
// }

// // prefixed with underscored because delete is a reserved word in javascript
// function _handleDelete (id) {
//   return fetchWrapper.delete(`${baseUrl}/${id}`)
// }
// const articleService = {
//   getAll,
//   getById,
//   create,
//   update,
//   delete: _handleDelete,
// }


// export async function getServerSideProps ({ params }) {
//   const data = await articleService .getById(params.id)

//   return { props: { data } }
// }



export default function ArticlePage({data}) {
  const router = useRouter()
  const id = router.query.id


  console.log(data)

  return ( 
    <>
    
    <Nav />
      
      
         {/* {sectionData?.newspageData.map((data) => (    */}
        <main className="page" 
        // key={data.id}
        >

          <h1>Article details {id}</h1>
          <div className="article-img">
                    <div className="article-img__img-cntr">
                        {data?.img?.map((img) => (
                            <Image key={img?.id} src={img?.src} alt={img?.alt} height={600} width={600} />
                        ))}
                    </div>
                </div>

                <div className="article-cnt">
                    <div className="article-cnt__txt">
                        <span className="article-cnt__txt__details">{data?.subheadline}</span>
                        <p className="article-cnt__txt__headline">{data?.headline}</p>
                        <p className="article-cnt__txt__text">{data?.text}</p>
                    </div>

                    <div className="article-cnt__btm">
                        <div className="seeMore-cntr seeMore-cntr-trimspace">
                            {/* <SeeMoreCtaLink data={data}/> */}
                        </div>
                    </div>
                </div>
          {/* {data.articles.map((data) => (
          <Article data={data} key={data.id}/>
          ))} */}


        </main>
      
       {/* ))}   */}
    </>
  )
}


