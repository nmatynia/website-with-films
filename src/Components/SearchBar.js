import React from "react";
import { useState } from "react/cjs/react.development";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { PinDropSharp } from "@mui/icons-material";
/* <SearchIcon /> */

export default function SearchBar(props) {
  return (
    <div className="searchBar">
      Movie you want to find:
      <input
        type="text"
        placeholder="______________________"
        value={props.input}
        onChange={props.handleChange}
      />
    </div>
  );
}
