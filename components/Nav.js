import React, { useState, useEffect } from 'react';
import NavBurgerMenu from './NavBurgerMenu';
import { NavLink } from './NavLink';
// import SearchField from './SearchField';

const Nav = ({ data }) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // const [scrollYFromTop, setScrollYFromTop] = useState(0);
  const [navbg, setNavbg] = useState(true);
  const [sectionData, setSectionData] = useState(null);
  const [isLoading, setLoading] = useState(false);


  // Hide navbar on scroll
  const navBackground = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > 600) { // if scroll down hide the navbar
        setNavbg(false); 
      } else { setNavbg(true) } // if scroll up show the navbar
    }
    const n = document.getElementById("nav-bg");
    if (n.classList.contains("navbg")) { // if dropdown is shown, dont hide nav on scroll
      setNavbg(true); 
    } 
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', navBackground);
      return () => { // cleanup function 
        window.removeEventListener('scroll', navBackground);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // Hide navbar on scroll
  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { setShow(true) } // if scroll up show the navbar
      setLastScrollY(window.scrollY); // remember current page location to use in the next move
    }
    // if (typeof window !== 'undefined') { 
    const y = document.getElementById("dropdown"); 
    const n = document.getElementById("nav-bg");
    if (y.classList.contains("show")) { // if dropdown is shown, dont hide nav on scroll
      n.classList.add("show")
      setShow(true); 
    }  
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => { // cleanup function 
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);


  // Fetch data
  useEffect(() => {
    setLoading(true)
    fetch('/api/nav')
      .then((res) => res.json())
      .then((sectionData) => {
        setSectionData(sectionData)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p></p>
  if (!sectionData) return <p>No data</p>



function checkTheme(data) {
  const isTheme = data.theme;
    if (isTheme === "theme-lightest-green") { 
      return ("theme-lightest-green") 
    }

    if (isTheme === "theme-midnight-green") { 
      return ("theme-midnight-green") 
    }       
    else { 
        return("") 
    }
}


  return (
    <>
      <nav className={`active ${show && ''}`} id="nav">
        {sectionData.data.map((data) => (

          <div key={data.id} className={`nav-cntr ${navbg && ''}`} id="nav-bg">
            {/* <div className="nav-outer-cntr"> */}
            <div className={`nav-outer-cntr ${checkTheme(data) && ''}`}>
              <div className="nav-inner-cntr">

                <div className="nav-mob-links">                 
                  <NavBurgerMenu data={data}/>
                </div>   

                <div className="nav-inner-cntr__links">
                  {data?.navLinks.map((link) => (
                    <NavLink key={link.id} href={link.url} >
                    {link.linkTxt}
                  </NavLink>
                  ))}    
                
                    {/* <SearchField/> */}
                </div>
              </div>

              <div className="nav-outer-cntr__logo"> 
                {data?.logoLink.map((logoLink) => (
                  <a key={logoLink.id} href={logoLink.url}>
                    <div className="logo-svg"></div>
                  </a>
                ))}
              </div>
              
            </div>
          </div>
        ))}
      </nav>
    </>       
  );
};

export default Nav;
