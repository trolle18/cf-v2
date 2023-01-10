import React, { useState, useEffect } from 'react';
import TagHeadlineSubheadline from '../../components/TextSectionModules/TagHeadlineSubheadline';
import LoadModal from '../../components/LoadModal';
import Nav from '../../components/Nav/Nav';
import Hero from '../../components/Hero';
import AllArticles from '../../components/AllArticles';



export default function ArticlesPage() {
  const [sectionData, setSectionData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/articlespage')
      .then((res) => res.json())
      .then((sectionData) => {
        setSectionData(sectionData)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p></p>
  if (!sectionData) return <p>No data</p>
  
  return (
    <>
      <Nav />
      {sectionData.articlespageData.map((data) => (
        <main className="page" 
        key={data.id}
        >
          <section className="modal-wrapper modal-theme-light-orange modal-hops-light-green">
            <LoadModal />
          </section>

          {data.hero?.map((data) => (
              <Hero key={data.id} data={data}/>
          ))}
          {data.txtBlock?.map((data) => (
            <section className="textSection" key={data.id} data={data}>
              <TagHeadlineSubheadline data={data}/>
            </section>
          ))}

          <AllArticles/>

        </main>
        ))}
    </>
  )
}


