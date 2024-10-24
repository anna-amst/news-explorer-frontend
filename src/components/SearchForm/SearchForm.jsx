import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="searchform">
      <input className="searchform__input" type="text" placeholder="Enter topic"></input>
      <button className="searchform__button">Search</button>
    </div>
  );

}
export default SearchForm;