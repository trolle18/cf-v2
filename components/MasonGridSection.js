// import React, { useState, useEffect } from 'react';
import CtaLink from './CtaLink';
import MasonArticle from './MasonArticle';
// import TagHeadline from './TextSectionModules/TagHeadline';

export default function MasonGridSection({ data }) {
    // const [sectionData, setSectionData] = useState([]);

    // // Fetch data from JSON
    // useEffect(() => {
    //     async function getData() {
    //         const response = await fetch("/data/homePageData.json");
    //         const data = await response.json();
    //         setSectionData(data);             
    //     }       
    //     getData();        
    // }, []);

    return (
        <>
        {/* {sectionData.map((data) => ( */}
            <section className="textSection" key={data.id}>
                {data?.txtEventSection.map((section) => (
                <>
                
                {/* <TagHeadline key={section.id} section={data}/> */}
                    <div className="textSection__tag">
                        {/* <hr/> */}
                        <p>{section.tag}</p>
                    </div>

                    <div className="textSection__cntr" key={section.id}>
                        <div className="textSection__cntr__inner-cntr grid-cntr grid-1-2">                
                            <div className="grid-1-2__col-1  headline-cntr">
                                <h2>{section.headline}</h2>
                            </div>    
                        </div>
                        </div>
                        
                        <div className="textSection__cntr" key={section.id}>
                        <div className="mason-grid">
                            {section?.articles.map((article) => (
                                <MasonArticle key={article.id} article={article} />
                            ))}   
                        </div>

                        {section?.link.map((data) => (
                            <div key={data.id} className="arrow-down">
                                <CtaLink key={data.id} data={data}/>
                            </div>
                            
                        ))}                     
                    </div>  
                </>          
                ))} 
            </section>        
        {/* ))}   */}
        </>
    )
}
