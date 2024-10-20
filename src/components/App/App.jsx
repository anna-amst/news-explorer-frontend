import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import "./App.css";

function App() {

  return (
    <>
    <div className="page">
      <div className="page__content">
     <Header />
     <SearchForm />
     <About />
     </div>
     </div>
    </>
  );
}

export default App;
