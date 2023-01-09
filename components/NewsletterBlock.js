import React, { useState } from 'react';
import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';

export default function NewsletterBlock({ data }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const user = {
        "name": name,
        "email": email,
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(user)
    }

    return (
        <>
        <section className="textSection" >
            <TagHeadlineSubheadline data={data}/>      
        </section>   

        <section className="newsletterBlock" >
            <div  className="newsletterBlock__cntr">

                <form className="newsletterBlock__cntr__inner-cntr" id="form" > 

                    {data?.inputfields
                    .filter((input) => input.type.includes('name'))
                    .map((input) => (
                        <div key={input.id} className="inputfield">
                            <input 
                            placeholder={input.text} 
                            type="text" 
                            id={input.type}
                            onChange={e => setName(e.target.value)}
                            />
                        </div>
                    ))}

                    {data?.inputfields
                    .filter((input) => input.type.includes('email'))
                    .map((input) => (
                        <div key={input.id} className="inputfield">
                            <input 
                            placeholder={input.text} 
                            type="text" 
                            id={input.type}
                            onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    ))}

                    <div className="cta-btn-cntr ylw-cta arrow-top-r">
                        {data?.link.map((link) => (
                            <button 
                            key={link.id} 
                            id="submit"
                            className="cta-btn" 
                            type="submit"
                            onClick={handleSubmit}
                            >
                                <span className="cta-btn__arrow"></span>
                                <p className="cta-btn__text">{link.text}</p>
                                <span className="cta-btn__svg-cntr">
                                    <span className="arrow"></span>
                                </span>         
                            </button>
                        ))}
                    </div>

                </form>

            </div>         
        </section>        
        </>
    )
}