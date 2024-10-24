import { useState } from "react";

import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Main from "../Main/Main";
import "./App.css";
import NewsCard from "../NewsCard/NewsCard";
import NewsCardList from "../NewsCardList/NewsCardList";

function App() {
  const [activeModal, setActiveModal] = useState(false);

  const openModal = () => {
    setActiveModal(true);
  };

  const closeModal = () => {
    setActiveModal(false);
  };

  return (
    <>
      <div className="page">
        <div className="page__content">
          <div className="page__background">
            <Header openModal={openModal} />
            <Main />
          </div>
          <NewsCardList />
          <About />
          <Footer />
        </div>
      </div>
      {activeModal && (
        <ModalWithForm isOpen={activeModal} closeModal={closeModal} />
      )}
    </>
  );
}

export default App;
