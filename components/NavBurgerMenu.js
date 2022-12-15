/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from 'react';

import { NavLink } from "./NavLink";

export default function NavBurgerMenu({data}) {
  const button = document.getElementById("menu-btn");
  const dropdown = document.getElementById("dropdown");
  const nav = document.getElementById("nav");
  const navLink = document.querySelectorAll("#nav-link");
  const navOverflow = document.getElementById("nav-overflow");
  const body = document.body;

  // Open burger menu
  const openMenu = () => {
    button.classList.toggle("change");
    
    // Toggle classLists of dropdown + nav on button click
    if (dropdown.classList.contains("hidden")) {
      dropdown.classList.remove("hidden");
      dropdown.classList.add("show");
      nav.classList.add("show")
    } 
    else {
      dropdown.classList.remove("show");
      dropdown.classList.add("hidden");
      nav.classList.remove("show")
    }

    // Disable document body scroll, when dropdown is visible
    if (dropdown.classList.contains("show")) { 
      body.classList.add("overflow")
      navOverflow.classList.add("active")
      navOverflow.classList.remove("hidden")
    } 
    else {
      body.classList.remove("overflow")
      navOverflow.classList.remove("active")
      navOverflow.classList.add("hidden")
    }

    // Close dropdown menu after link is clicked
    navLink.forEach(el => el.addEventListener("click", function(e) { 
      button.classList.toggle("change");
      dropdown.classList.toggle("show");
      if (y.classList.contains("show")) {
        dropdown.classList.add("hidden");
        dropdown.classList.remove("show");
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
      {/* <div className="nav-mob-links__dropdown__overlay"></div> */}
    </>
  );
};
