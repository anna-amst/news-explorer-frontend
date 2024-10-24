import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import "./App.css";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Main from "../Main/Main";

function App() {

  return (
    <>
    <div className="page">
      <div className="page__content">
        <div className="page__background">
     <Header />
     <Main />
     </div>
     <About />
     <Footer />
     </div>
     </div>
     <ModalWithForm />
    </>

  );
}

export default App;
