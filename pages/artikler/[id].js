// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import Nav from '../../components/Nav/Nav';
// import articles from "../api/artikler"

// const Article = ({ data }) => {
//   // return {
//     <>
//     <Nav />
//       <main className="page">
//         {/* <h1>Article details {data.id}</h1> */}
//         {/* <p>{data.headline}</p> */}
//       </main>
//     </>
//   // }

// }

// export default Article

import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
