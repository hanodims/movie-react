import React, {useState } from "react";


function SearchBar(props){

const handelChange = event => {
    props.setQuery(event.target.value);
}; 

return (
    <div>
        <label>Search: </label>
        <input type="text" onChange={handelChange}/>
  </div>
);
} 

export default SearchBar;
