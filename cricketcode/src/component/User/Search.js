


import React from "react";

function Search(prop) {
  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    prop.inputHandler(lowerCase);
  };

  return (
    <div className="main">
      <div className="search">
                        <form className="m-3">
                            <input class="form-control" type="search" placeholder="Search..." aria-label="Search"
                             onChange={inputHandler} />
                                              
                            </form> 
                             
               
      </div>
    </div>
  );
};

export default Search;