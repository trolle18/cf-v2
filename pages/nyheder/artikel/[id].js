import React, { useState, useEffect } from 'react';
// import TagHeadlineSubheadline from '../../../components/TextSectionModules/TagHeadlineSubheadline';
// import SortArticleSection from '../../components/SortArticleSection';
// import LoadModal from '../../components/LoadModal';
// import NewsletterBlock from '../../components/NewsletterBlock';
// import VideoSection from '../../components/VideoSection';
import Nav from '../../../components/Nav';
import Hero from '../../../components/Hero';
import Article from '../../../components/Article';


export default function ArticlePage({data}) {
  const [sectionData, setSectionData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    // const article = await sectionData.newspageData.articles.getById(params.id)
  
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
    
    <Nav />
      
        <>
        
        <main className="page" >
          <Article data={data} />
{/* 
        {sectionData?.newspageData.map((data) => (    
          <>
            {data?.hero?.map((data) => ( 
              <Hero key={data.id} data={data}/>
            ))}  
          </>
        ))} */}

        </main>
        </>
     
    </>
  )
}


