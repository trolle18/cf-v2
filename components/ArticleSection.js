import { useEffect, useState } from "react"
import Article from "./Article";

export default function ArticleSection({ data }) {

    return (
        <>
        <section className="textSection">
            <div className="textSection__cntr">

                <section className="article-section">
                    {data.articles.map((data) => (
                            <Article key={data.id} data={data} />
                    ))}
                </section>
                
            </div>
        </section>

        </>
    )
}