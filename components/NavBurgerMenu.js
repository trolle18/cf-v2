/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from 'react';

import { NavLink } from "./NavLink";
import SearchField from "./SearchField";

export default function NavBurgerMenu({data}) {
  const button = document.getElementById("menu-btn");
  const dropdown = document.getElementById("dropdown");
  const nav = document.getElementById("nav");
  const navLink = document.querySelectorAll("#nav-link");
  const navOverflow = document.getElementById("nav-overflow");
  const body = document.body;

  // const navLinkBtn = document.querySelectorAll("#nav-link-btn");
  // const droplvl2 = document.getElementById("dropdown-lvl2");

  // Open burger menu
  const openMenu = () => {
    button.classList.toggle("change");
    
    // Toggle classLists of dropdown + nav on button click
    if (dropdown.classList.contains("hidden")) {
      dropdown.classList.remove("hidden");
      dropdown.classList.add("show");
      nav.classList.add("show")
    } else {
      dropdown.classList.remove("show");
      dropdown.classList.add("hidden");
      nav.classList.remove("show")
    }

    // Disable document body scroll, when dropdown is visible
    if (dropdown.classList.contains("show")) { 
      body.classList.add("overflow")
      navOverflow.classList.add("active")
      navOverflow.classList.remove("hidden")
    } else {
      body.classList.remove("overflow")
      navOverflow.classList.remove("active")
      navOverflow.classList.add("hidden")
    }

    // Close dropdown menu after link is clicked
    navLink.forEach(el => el.addEventListener("click", function(e) { 
      button.classList.toggle("change");
      dropdown.classList.toggle("show");

      if (dropdown.classList.contains("show")) {
        dropdown.classList.add("hidden");
        dropdown.classList.remove("show");
      }
    }));
  }

  // const openLvl2 = () => {
  //   navLinkBtn.classList.toggle("change")

  //   if (droplvl2.classList.contains("hidden")) {
  //     droplvl2.classList.remove("hidden")
  //     droplvl2.classList.add("show")
  //   } else {
  //     droplvl2.classList.remove("show")
  //     droplvl2.classList.add("hidden")
  //   }
  // }
  

  return (
    <>
      <button onClick={openMenu} className="nav-mob-links__menu-btn" id="menu-btn">
        <div className="menu-btn-inner-cntr">
          <span className="menu-icon"></span>
          <span className="menu-text"></span>
        </div>
      </button>

      <div className="nav-mob-links__dropdown hidden" id="dropdown">
        <div className="nav-mob-links__dropdown__links-cntr">
          {data?.navLinks.map((navLink) => (
            <NavLink key={navLink.id} href={navLink.url} className="nav-mob-links__dropdown__links-cntr__link nav-link nav-link-btn" id="nav-link-btn">
              <span className="nav-mob-links__dropdown__links-cntr__link__link-text">
                <span>{navLink.text}</span>              
              </span>
            </NavLink>
          ))}  
        </div>

        <div className="nav-mob-links__dropdown__sec-links-cntr">
          {data?.subLinks.map((link) => ( 
            <NavLink key={link.id} href={link.url} className="nav-mob-links__dropdown__sec-links-cntr__link nav-link">
              <span className="nav-mob-links__dropdown__sec-links-cntr__link__link-text">
                {link.text}
              </span>
            </NavLink>
          ))}  
        </div>            
        <SearchField/>
      </div>
      
      <div className="dropdown-lvl2 hidden" id="dropdown-lvl2">
        <div className="dropdown-lvl2__links-cntr">
          {data?.navLinks[0].subLvlLinks.map((link) => ( 
            <NavLink key={link.id} href={link.url} className="dropdown-lvl2__links-cntr__link nav-link">
              <span className="dropdown-lvl2__links-cntr__link__link-text">
                <span>{link.text}</span>              
              </span>
            </NavLink>
          ))}  
        </div>        
      </div>

    </>
  );
};
