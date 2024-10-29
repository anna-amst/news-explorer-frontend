import "./SearchForm.css";
import { useState } from "react";

function SearchForm() {
  // const [input, setInput] = useState("");

  // const fetchData = (value) => {
  //   // fetch call to API
  // }

  // const handleChange = (value) => {
  //   setInput(value);
  //   fetchData(value);
  // }
  return (
    <div className="searchform">
      <input className="searchform__input" type="text" placeholder="Enter topic"></input>
      <button className="searchform__button">Search</button>
    </div>
  );

}
export default SearchForm;