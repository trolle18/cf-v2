/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from 'react';

import { NavLink } from "./NavLink";

export default function NavBurgerMenu({data}) {
  // const [show, setShow] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  const button = document.getElementById("menu-btn");
    const y = document.getElementById("dropdown");
    const n = document.getElementById("nav");
    const a = document.querySelectorAll("#nav-link");

  // Open burger menu
  const openMenu = () => {
    button.classList.toggle("change");
    
    if (y.classList.contains("hidden")) {
      y.classList.remove("hidden");
      y.classList.add("show");
      n.classList.add("show")
    } else {
      y.classList.remove("show");
      y.classList.add("hidden");
      n.classList.remove("show")
    }
  
    a.forEach(el => el.addEventListener("click", function(e) {
      button.classList.toggle("change");
      y.classList.toggle("show");
      if (y.classList.contains("show")) {
        y.classList.add("hidden");
        y.classList.remove("show");
      }
    }));

  }
      

  return (
    <>
      <button onClick={openMenu} className="nav-mob-links__menu-btn" id="menu-btn">
      <div className="menu-btn-inner-cntr">
      <span className="menu-icon"></span>
        <span className="menu-text"></span>
      </div>
       
      </button>

      <div className="nav-mob-links__dropdown hidden" id="dropdown">
        {data?.navLinks.map((navLink) => ( 
          <NavLink key={navLink.id} href={navLink.url} className="nav-mob-links__dropdown__link" id="nav-link">
            <span className="nav-mob-links__dropdown__link__link-div">
              <span>{navLink.linkTxt}</span>              
            </span>
          </NavLink>       
        ))} 
      </div>
    </>
  );
};
