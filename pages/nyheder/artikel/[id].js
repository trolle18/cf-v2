import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Nav from '../../../components/Nav/Nav';


export default function ArticlePage({params}) {

  const router = useRouter()
  const id = router.query.id

  return ( 
    <>
    
    <Nav />
      
      
         {/* {sectionData?.newspageData.map((data) => (    */}
        <main className="page" 
        // key={data.id}
        >

          <h1>Article details {id}</h1>
          {/* {data.articles.map((data) => (
          <Article data={data} key={data.id}/>
          ))} */}


        </main>
      
       {/* ))}   */}
    </>
  )
}


