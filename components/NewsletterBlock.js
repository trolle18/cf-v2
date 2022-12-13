import React, { useState, useEffect } from 'react';
import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';

export default function NewsletterBlock({ data }) {

    return (
        <>
        <section className="textSection" >
            <TagHeadlineSubheadline data={data}/>      
        </section>   

        <section className="newsletterBlock" >
            <div  className="newsletterBlock__cntr">
                <div className="newsletterBlock__cntr__inner-cntr"> 

                    {data?.inputfields
                    .filter((input) => input.type.includes('name'))
                    .map((input) => (
                        <div key={input.id} className="inputfield">
                            <input placeholder={input.text} type="text" id="name" name="name"/>
                        </div>
                    ))}

                    {data?.inputfields
                    .filter((input) => input.type.includes('email'))
                    .map((input) => (
                        <div key={input.id} className="inputfield">
                            <input placeholder={input.text} type="text" id="email" name="email"/>
                        </div>
                    ))}

                    <div className="cta-btn-cntr ylw-cta arrow-top-r">
                        {data?.link.map((link) => (
                            <button className="cta-btn" key={link.id} onClick={console.log("submit")}>
                                <span className="cta-btn__arrow"></span>
                                <p className="cta-btn__text">{link.text}</p>
                                <span className="cta-btn__svg-cntr"><span className="arrow"></span></span>         
                            </button>
                        ))}
                    </div>

                </div>   
            </div>         
        </section>        
        </>
    )
}