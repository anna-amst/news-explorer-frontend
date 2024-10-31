import "./SearchForm.css";
import { useState } from "react";

function SearchForm({onSearch}) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  const handleInputChange =(event) => {
    setKeyword(event.target.value);
  };

  const handleSearchClick =() => {
    if (!keyword) {
      setError("Please enter a keyword");
    } else {
      setError("");
      onSearch(keyword);
    }
  }

  return (
    <div className="searchform">
      <input className="searchform__input" type="text" placeholder="Enter topic" value={keyword} onChange={handleInputChange}></input>
      <button className="searchform__button" onClick={handleSearchClick}>Search</button>
    </div>
  );

}
export default SearchForm;