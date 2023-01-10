import React, { useState } from 'react';
import useSWR from 'swr';
import Article from './Article';
import ArticleTest from './ArticleCopy';


const fetcher = (url) => fetch(url).then((res) => res.json())

export default function AllArticles() {
  const { data, error } = useSWR('/api/articles', fetcher)
  const [searchValue, setSearchValue] = useState("");


  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

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
      <section className="textSection" >
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
            {data
            .sort ((a, b) => a?.deadline > b?.deadline ? 1 : -1)
            .filter((data) => data.headline.toLowerCase().includes(searchValue) || matchKeywords(searchValue, data?.keywords))
            .map((data) => (
              <ArticleTest key={data.id} data={data} />
            ))}
          </section>
        </div>
      </section>
 
    </>
  )
}


