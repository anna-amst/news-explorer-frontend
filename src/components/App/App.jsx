import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Main from "../Main/Main";
import "./App.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  const [activeModal, setActiveModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearching, setIsSearching] = useState(false); // to track if the search started
  const navigate = useNavigate();

  const handleSearch = () => {
    setIsSearching(true);
    navigate('/saved-news');
  }

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
            
              <Routes>
                <Route
                  path="*"
                  element={
                    <>
                    <div className="page__background">
                      <Header openModal={openModal} isLoggedIn={isLoggedIn} />
                      <Main onSearch={handleSearch}/>
                      </div>
                      <About />
                    </>
                  }
                />
                <Route
                  path="saved-news"
                  element={
                    <>
                      <SavedNewsHeader/>
                      <SavedNews />
                      <NewsCardList />
                    </>
                  }
                />
              </Routes>
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
