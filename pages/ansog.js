import React, { useState, useEffect } from 'react';
import SubpageHero from '../components/SubpageHero';
import TagHeadlineSubheadline from '../components/TextSectionModules/TagHeadlineSubheadline';
import BlockGridSection from '../components/BlockGridSection';
import SortArticleSection from '../components/SortArticleSection';
import SeeMoreCtaLink from '../components/SeeMoreCtaLink';
import LoadModal from '../components/LoadModal';
import Nav from '../components/Nav';
import Hero from '../components/Hero';


export default function ApplicationPage() {
  const [sectionData, setSectionData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/applicationpage')
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
      {sectionData.applicationpageData.map((data) => (    
        <>
          {/* {data?.nav.map((data) => (  */}
          <Nav />
          {/* ))}   */}
        <main className="page" key={data.id}>

            <section className="modal-wrapper modal-theme-dark-red modal-hops-yellow">
              <LoadModal />
            </section>

            {data.hero?.map((data) => ( 
              <section className="hero-wrapper subpagehero-wrapper theme-midnight-green" key={data.id} >
                <Hero data={data}/>
              </section>
            ))}  

            {data.txtBlock?.map((data) => ( 
              <section className="textSection" key={data.id} data={data}>
                <TagHeadlineSubheadline data={data}/>      
              </section>   
            ))} 

            {data.applicationArticles?.map((data) => ( 
              <SortArticleSection key={data.id} data={data}/>
            ))}   
            {data.txtBevillingSection?.map((data) => ( 
          
              <section className="textSection"  key={data.id}>
                <TagHeadlineSubheadline data={data}/>   
                <div className="textSection__cntr"> 
                  <div className="seeMore-cntr">
                    <SeeMoreCtaLink data={data}/>
                  </div> 
                </div>  
              </section>
            ))} 


            {data.otherProjectsSection?.map((data) => ( 
              <BlockGridSection key={data.id} data={data}/>
            ))} 

        </main>
        </>
      ))}
    </>
  )
}


