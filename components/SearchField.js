import { useState } from "react";


export default function SearchField() {
  const [searchValue, setSearchValue] = useState("");

  //   // Adds function to search for keywords in searchbar 
  //   function matchKeywords(searchValue, keywords) {
  //       let match = false;
  //       for (const keyword of keywords) {
  //           if (keyword.toLowerCase().includes(searchValue)) {
  //               match = true;
  //           }
  //       }
  //       return match;
  //   }

  return (
    <>
      <div className="search-cntr">
          <input 
          className="search-cntr__input" 
          type="text" 
          placeholder="Søg" 
          onChange={(e) => setSearchValue(e.target.value.toLowerCase())} 
          />
          <div className="search-svg"></div>
      </div>
    </>
  );
};
