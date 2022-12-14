import React, { useState, useEffect } from 'react';
import SubpageHero from '../components/SubpageHero';
import TagHeadlineSubheadline from '../components/TextSectionModules/TagHeadlineSubheadline';
import SortArticleSection from '../components/SortArticleSection';
import LoadModal from '../components/LoadModal';
import NewsletterBlock from '../components/NewsletterBlock';
import VideoSection from '../components/VideoSection';
import Nav from '../components/Nav';
import Hero from '../components/Hero';


export default function NewsPage() {
  const [sectionData, setSectionData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/newspage')
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
      {sectionData.newspageData.map((data) => (    
        <>
        {/* {data?.nav.map((data) => (  */}
        <Nav />
          {/* ))}   */}
        <main className="page" key={data.id}>

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

          {data.articles?.map((data) => ( 
            <SortArticleSection key={data.id} data={data}/>
          ))}   

          {data.videoSection?.map((data) => ( 
            <VideoSection key={data.id} data={data}/>
          ))} 

          {data.newsletterBlock?.map((data) => ( 
            <NewsletterBlock key={data.id} data={data}/>
          ))}

        </main>
        </>
      ))}
    </>
  )
}


