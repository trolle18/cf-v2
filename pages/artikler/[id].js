import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr'
// import Image from 'next/image';
import Nav from '../../components/Nav/Nav';
// import articles from "../api/artikler"

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
    () => query.id && `/api/articlespage/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>


  return (
    <>
    <Nav />
      <main className="page">
        <h1>Article details {data.id}</h1>
        {/* <p>{data.headline}</p> */}
      </main>
    </>
  )

}

