import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import "./App.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import MobileNavBar from "../MobileNavBar/MobileNavBar";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading]= useState(false);
  const [error, setError] = useState("");
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);
  

  const onSearch = async (keyword) => {
    console.log("onSearch called with:", keyword);
    setIsLoading(true);
    setError("");
    setIsSearchPerformed(true);
    
    const apiKey = "a6189f41d4654ea6bbdc657c8085baae";
    const today = new Date().toISOString().split("T")[0];
    const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
    const url = `https://newsapi.org/v2/everything?q=${keyword}&from=${lastWeek}&to=${today}&pageSize=100&apiKey=${apiKey}`;
  
    try {
      const response = await fetch(url); // await can be used here because onSearch is an async function
      if (!response.ok) throw new Error("Failed to fetch news articles.");
      const data = await response.json();
      console.log("Fetched articles:", data.articles);
      setArticles(data.articles);
    } catch (error) {
      setError("An error occurred while fetching news articles.");
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };


  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleMobileMenuClick = () => {
    console.log("Mobile menu clicked");
    setActiveModal("mobile-menu");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  const navigateToLogin = () => {
    setActiveModal("login");
  };

  const navigateToSignUp = () => {
    setActiveModal("register");
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
                    <Header
                      handleLoginClick={handleLoginClick}
                      handleMobileMenuClick={handleMobileMenuClick}
                      isLoggedIn={isLoggedIn}
                    />
                    <Main onSearch={onSearch} />
                  </div>
                  {isSearchPerformed && (
                    <NewsCardList articles={articles} isLoading={isLoading} error={error} />
                  )}
                  <About />
                </>
              }
            />
            <Route
              path="saved-news"
              element={
                <>
                  <SavedNewsHeader />
                  <SavedNews />
                  <NewsCardList articles={articles} />
                </>
              }
            />
          </Routes>
          <Footer />
        </div>
      </div>
      {activeModal === "login" && (
        <LoginModal
          isOpen={true}
          closeModal={closeModal}
          navigateToSignUp={navigateToSignUp}
        />
      )}

      {activeModal === "register" && (
        <RegisterModal
          isOpen={true}
          closeModal={closeModal}
          navigateToLogin={navigateToLogin}
        />
      )}

      {activeModal === "mobile-menu" && (
        <MobileNavBar
          isOpen={true}
          closeModal={closeModal}
          navigateToLogin={navigateToLogin}
        />
      )}
    </>
  );
}

export default App;
