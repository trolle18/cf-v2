import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Nav from '../../components/Nav/Nav';
import articles from "../api/artikler"

// export const getStaticProps = async ({ params }) => {
//   const articleList = articles.filter(a => a.id.toString() === params.id)
//   return {
//     props: {
//       data: articleList[0]
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const paths = articles?.map(data => ({
//     params: { id: data.id.toString() }
//   }, [] ))
//   return { paths, fallback: false }
//   console.log(data.id)
// }


// ---------------
// export async function getStaticPaths() {
//   // When this is true (in preview environments) don't
//   // prerender any static pages
//   // (faster builds, but slower initial page load)
//   if (process.env.SKIP_BUILD_STATIC_GENERATION) {
//     return {
//       paths: [],
//       fallback: 'blocking',
//     }
//   }

//   // Call an external API endpoint to get posts
//   const res = await fetch(articles)
//   const article = await res.json()

//   // Get the paths we want to prerender based on posts
//   // In production environments, prerender all pages
//   // (slower builds, but faster initial page load)
//   const paths = article.map((data) => ({
//     params: { id: data.id },
//   }))

//   // { fallback: false } means other routes should 404
//   return { paths, fallback: false }
// }

const Article = ({ data }) => {
  // return {
    <>
    <Nav />
      <main className="page">
        {/* <h1>Article details {data.id}</h1> */}
        {/* <p>{data.headline}</p> */}
      </main>
    </>
  // }

}

export default Article

  



