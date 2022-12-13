import React, { useState, useEffect } from 'react';
import NewsletterBlock from '../components/NewsletterBlock'
import AboutPurposeSection from '../components/AboutPurposeSection';
import SubpageHero from '../components/SubpageHero';
import TagHeadlineSubheadline from '../components/TextSectionModules/TagHeadlineSubheadline';
import SwiperCarousel from '../components/SwiperCarousel';
import TextBevillingSection from '../components/TextBevillingSection';
import TextFondetsMidler from '../components/TextFondetsMidler';
import BlockGridSection from '../components/BlockGridSection';
import LoadModal from '../components/LoadModal';
import Nav from '../components/Nav';


export default function AboutPage() {
  const [sectionData, setSectionData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/aboutpage')
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
      {sectionData.aboutpageData.map((data) => (    
        <>
          {/* {data?.nav.map((data) => (  */}
            <Nav />
          {/* ))}   */}
      
        <main className="page" key={data.id}>

          <section className="modal-wrapper modal-theme-midnight-green modal-hops-light-green">
            <LoadModal />
          </section>
          

          {data.hero?.map((data) => ( 
            <section className="hero-wrapper subpagehero-wrapper theme-midnight-green" key={data.id} >
              <SubpageHero data={data}/>
            </section>
          ))}  
          
          {data.purposeSection?.map((data) => ( 
            <AboutPurposeSection key={data.id} data={data}/>
          ))}   

          {data.txtSliderSection?.map((data) => ( 
            <section className="textSection" key={data.id}>
                  <TagHeadlineSubheadline data={data}/>
                  <SwiperCarousel data={data}/>
              </section>      
          ))} 

          {data.txtBevillingSection?.map((data) => ( 
            <TextBevillingSection key={data.id} data={data}/>
          ))} 

          {data.midlerSection?.map((data) => ( 
            <TextFondetsMidler key={data.id} data={data}/>
          ))} 

          {data.otherProjectsSection?.map((data) => ( 
            <BlockGridSection key={data.id} data={data}/>
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
