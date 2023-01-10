import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Footer() {


    const [sectionData, setSectionData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/footer')
        .then((res) => res.json())
        .then((sectionData) => {
          setSectionData(sectionData)
          setLoading(false)
        })
    }, [])
  
    if (isLoading) return <p></p>
    if (!sectionData) return <p>No data</p>

    function linkTarget(link) {
        const openNewPage = link.openNewPage
        if (openNewPage) {
            if (openNewPage === true) {
                return "_blank"
            }
        }
    }


    return (
        <>        
        <footer>
            {sectionData.data.map((data) => (
                <div key={data.id} className="footer-cntr">
                    <div className="footer-top">
                        <div className="footer-top__col-1">
                            {data?.logoLink.map((logoLink) => (
                                <a key={logoLink.id} href={logoLink.url} className="footer-top__col-1__logo">
                                <Image alt={logoLink.alt} src={logoLink.src} height={100} width={100}/>
                                    <div className="logo-svg"></div>
                                </a>
                            ))}
                            <div className="footer-top__col-1__btm">
                            {data?.contactInfo.map((link) => (
                                <a key={link.id} href={link.url} target="_blank" rel="noreferrer">
                                     <div >
                                    <p>{link.text}</p>
                                    <p>{link?.subtext}</p>
                                </div>
                                </a>
                               
                            ))}
                            </div>
                        </div>

                        <div className="footer-top__col-2">                
                            {data?.navLinks.map((navLink) => (
                                <div key={navLink.id} className="footer-top__col-2__box">
                                <a href={navLink?.url}>
                                    <p className="footer-top__col-2__box__headline">{navLink.headline}</p>
                                </a>                                    
                                    <div className="footer-top__col-2__box__links">
                                        {navLink?.links.map((link) => (
                                            <a 
                                            key={link.id} 
                                            href={link.url}
                                            target={linkTarget(link)}
                                            >
                                               <p>{link.text}</p>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* BOTTOM LINKS */}
                    <div className="footer-btm">
                        <div className="footer-btm__col-1">
                            {data?.btmLinks.map((link) => (
                                <p key={link.id}>{link.text}</p>
                            ))}
                        </div>

                        {/* SOCIAL MEDIA LINKS */}
                        <div className="footer-btm__col-2">
                        {data?.someLinks.map((link) => (
                            <a key={link.id} href={link.url} target="_blank" rel="noreferrer">
                                <div key={link.id} className="footer-btm__col-2__some-links">
                                    <p>{link.altText}</p>
                                </div>
                            </a>
                            ))}
                        </div>

                    </div>
                </div>
            ))}
        </footer>
        </>
    )
}