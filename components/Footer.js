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

  function linkUrl(link) {
    const url = link.url
    if (url) {
      return url
    }
  }

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
              {/* LOGO LINK */}
              {data?.logoLink.map((link) => (
                <a key={link.id} href={link.url} className="footer-top__col-1__logo">
                  <Image alt={link.alt} src={link.src} height={100} width={100}/>
                  <div className="logo-svg"></div>
                </a>
              ))}
                <div className="footer-top__col-1__btm">
                  {/* CONTACT LINKS */}
                  {data?.contactInfo.map((link) => (
                    <a key={link.id} href={linkUrl(link)} target={linkTarget(link)} rel="noreferrer">
                      <p>{link.text}</p>
                    </a>                            
                  ))}
                </div>
            </div>
            
            {/* COLUMN LINK */}
            <div className="footer-top__col-2">
              
              {data?.navLinks.map((link) => (
                <div key={link.id} className="footer-top__col-2__box">
                  <a href={link?.url} target={linkTarget(link)}>
                    <p className="footer-top__col-2__box__headline">{link.headline}</p>
                  </a>      
                  
                  <div className="footer-top__col-2__box__links">
                     {/* COLUMN LIST LINKS */}
                    {link?.links.map((link) => (
                      <a key={link.id} href={link.url} target={linkTarget(link)} >
                        <p>{link.text}</p>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="footer-btm">
            {/* BOTTOM LINKS */}
            <div className="footer-btm__col-1">
              {data?.btmLinks.map((link) => (
                <a key={link.id} href={link.url} target={linkTarget(link)}>
                  {link.text}
                </a>
              ))}
            </div>

            {/* SOCIAL MEDIA LINKS */}
            <div className="footer-btm__col-2">
              {data?.someLinks.map((link) => (
                <a key={link.id} href={link.url} target={linkTarget(link)} rel="noreferrer">
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