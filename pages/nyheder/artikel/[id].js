import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Nav from '../../../components/Nav/Nav';


export default function ArticlePage() {
  // const [sectionData, setSectionData] = useState(null)
  // const [isLoading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   fetch('/api/newspage')
  //     .then((res) => res.json())
  //     .then((sectionData) => {
  //       setSectionData(sectionData)
  //       setLoading(false)
  //     })
  // }, [])

  // if (isLoading) return <p></p>
  // if (!sectionData) return <p>No data</p>
  // console.log(data)

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


