import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Nav from '../../components/Nav/Nav';
import articles from "../api/artikler"
import NewsletterBlock from '../../components/NewsletterBlock';
import LoadModal from '../../components/LoadModal';
import Link from 'next/link';
import Article from '../../components/Article';


function ArticleListPage ()  {
  const [sectionData, setSectionData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  // const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setLoading(true)
    fetch('/api/artikler')
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
      {/* {sectionData.articles.map((data) => ( */}
        <main className="page">

          <section className="modal-wrapper modal-theme-light-orange modal-hops-light-green">
            <LoadModal />
          </section>


            <section className="textSection" key="idke">
              <div className="textSection__cntr">
       

                <section className="article-section">
                  {sectionData.articles
                  // .sort ((a, b) => a?.deadline > b?.deadline ? 1 : -1)
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


        </main>
      {/* ))} */}
    </>
  )

}

export default ArticleListPage



