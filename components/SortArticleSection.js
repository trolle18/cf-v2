import { useEffect, useState } from "react"
import Article from "./Article";

export default function SortArticleSection({ data }) {
    const [searchValue, setSearchValue] = useState("");

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
        <section className="textSection">
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
                        <Article key={data.id} data={data} />
                    ))}
                </section>
                
            </div>
        </section>

        </>
    )
}