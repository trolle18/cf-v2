import React, { useState, useEffect } from 'react';
import Image from "next/image";
import CtaBtn from './CTAbtn';

export default function TextCtaSection({ data }) {


    return (
        <>
        <section className="textSection" key={data.id}>
            <div key={data.id} className="textSection__cntr">
                <div className="textSection__cntr__inner-cntr grid-cntr grid-2-2"> 
                    <div className="grid-2-2__col-1 headline-cntr">
                        <h2>{data.headline}</h2>
                        <h2>{data.headline2nd}</h2>   
                    </div>    
                                
                    <div className="grid-2-2__col-2-4 txt-cntr">
                        <div className="txt-cntr__inner-cntr">
                            <div className="subheader">
                                <p>
                                    {data?.subheadline}
                                </p>                                
                            </div>
                            
                            <p>{data?.text}</p>
                            {data?.link.map((link) => (
                                <CtaBtn key={link.id} link={link}/>                          
                            ))}   
                        </div>                                                               
                    </div>

                    <div className="grid-2-2__col-3 img-cntr">
                        {data?.img?.map((img) => (
                            <Image key={img.id} src={img.src} alt={img.alt} width={300} height={300} />
                        ))}                              
                    </div>                    
                </div>   
            </div>         
        </section>        
        </>
    )
}