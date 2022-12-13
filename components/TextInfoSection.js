import React, { useState, useEffect } from 'react';
import CtaBtn from './CTAbtn';

export default function TextInfoSection() {
    const [sectionData, setSectionData] = useState([]);

    // Fetch data from JSON
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/homePageData.json");
            const data = await response.json();
            setSectionData(data);             
        }       
        getData();        
    }, []);

    return (
        <>
        <section className="hero-wrapper theme-midnight-green">
            {sectionData.map((data) => (
                <section className="textSection infoSection theme-midnight-green" key={data.id}>
                    {data?.txtInfoSection.map((section) => (
                        <>
                        <div className="textSection__tag">
                            {/* <hr/> */}
                            <p>{section.tag}</p>
                        </div>
                        
                        <div className="textSection__cntr" key={section.id}> 
                            <div className="textSection__cntr__inner-cntr">
                                <div className="headline-cntr headline-60w">
                                    <h2>{section.headline}</h2>
                                </div>
                            </div>
                                        
                            <div className="txt-cntr flx-row">
                                <div className="txt-cntr__list subheader">
                                    {section.categories.map((category) => (
                                        <div className="txt-cntr__list__item" key={category.id}>
                                            <span className="pointer">
                                                <svg width="48" height="9" viewBox="0 0 48 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="4.5" cy="4.5" r="3.7" stroke-width="1.6"/>
                                                    <line x1="3" y1="4.25" x2="48" y2="4.25" stroke-width="1.5"/>
                                                </svg>
                                            </span>
                                            <p>{category.name}</p>
                                        </div>
                                    ))}                                    
                                </div>  
                                
                                <div className="txt-cntr__right">
                                    <div className="slider-cntr">
                                        <span className="slider-cntr__base"></span>
                                        <span className="slider-cntr__step three"></span> <span className="slider-cntr__number three">03.</span>
                                        <span className="slider-cntr__step two"></span> <span className="slider-cntr__number two">02.</span>
                                        <span className="slider-cntr__step one"></span> <span className="slider-cntr__number one">01.</span>                                     
                                        <span className="slider">
                                            <span className="slider__icon"></span>
                                        </span>                                        
                                    </div>
                                    {section.articles?.map((article) => (
                                        <div className="txt-section" key={article.id}>
                                            {article.text?.map((text) => (
                                                <div className="txt-section__column" key={text.id}>
                                                    <p>{text.column}</p>
                                                </div>
                                           ))}   
                                        </div>
                                    ))}   
                                </div>                                                             
                            </div>   

                            <div className="cta-cntr-light">
                                {section?.link.map((link) => (
                                    <CtaBtn key={link.id} link={link}/>                          
                                ))}
                            </div>                     

                        </div>       
                        </>     
                    ))} 
                </section>        
            ))}
            </section>
        </>
    )
}