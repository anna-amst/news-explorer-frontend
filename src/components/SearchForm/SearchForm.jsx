import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="searchform">
      <h1 className="searchform__title">What's going on in the world</h1>
      <p className="searchform__text">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="searchform__form">
      <input className="searchform__input" type="text" placeholder="Enter topic"></input>
      <button className="searchform__button">Search</button>
      </div>
    </div>
  );

}
export default SearchForm;