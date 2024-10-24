import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import "./App.css";
import Footer from "../Footer/Footer";

function App() {

  return (
    <>
    <div className="page">
      <div className="page__content">
        <div className="page__background">
     <Header />
     <SearchForm />
     </div>
     <About />
     <Footer />
     </div>
     </div>
    </>
  );
}

export default App;
