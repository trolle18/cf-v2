import React, { useState, useEffect } from 'react';
import TagHeadlineSubheadline from '../../components/TextSectionModules/TagHeadlineSubheadline';
// import SortArticleSection from '../../components/SortArticleSection';
import LoadModal from '../../components/LoadModal';
import NewsletterBlock from '../../components/NewsletterBlock';
import VideoSection from '../../components/VideoSection';
import Nav from '../../components/Nav/Nav';
import Hero from '../../components/Hero';
import Article from "../../components/Article";
import Link from 'next/link';


export default function NewsPage() {
  const [sectionData, setSectionData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState("");

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


  // Adds function to search for keywords in searchbar
  function matchKeywords(searchValue, keywords) {
    let match = false;
    for (const keyword of keywords) {
        if (keyword.toLowerCase().includes(searchValue)) {
            match = true;
        }
    }
    return match;
  }



  return (
    <>
      <Nav />
      {sectionData.newspageData.map((data) => (
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
            <section className="textSection" key={data.id}>
              <div className="textSection__cntr">
                <div className="search-cntr">
                  <input
                  className="search-cntr__input"
                  type="text"
                  placeholder="Søg"
                  onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
                  />
                  <div className="search-svg"></div>
                </div>

                <section className="article-section">
                  {data.articles
                  .sort ((a, b) => a?.deadline > b?.deadline ? 1 : -1)
                  .filter((data) => data.headline.toLowerCase().includes(searchValue) || matchKeywords(searchValue, data?.keywords))
                  .map((data) => (
                    <Link
                    key={data.id}
                    href={`/artikler/${data.id}`}
                    data={data}
                    >
                      <Article key={data.id} data={data} />
                    </Link>

                  ))}
                </section>
              </div>
            </section>
          ))}



          {data.videoSection?.map((data) => (
            <VideoSection key={data.id} data={data}/>
          ))}

          {data.newsletterBlock?.map((data) => (
            <NewsletterBlock key={data.id} data={data}/>
          ))}
        </main>
      ))}
    </>
  )
}


