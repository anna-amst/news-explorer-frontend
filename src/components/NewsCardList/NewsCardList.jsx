import { useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";

function NewsCardList({ articles, isLoading, error, isLoggedIn }) {
  const [visibleCards, setVisibleCards] = useState(3);

  const showMoreCards = () => {
    setVisibleCards((prevCount) => prevCount + 3);
  }


  return (
    <div className="newscards__section">
      <h1 className="newscards__title">Search results</h1>
      {isLoading && <Preloader />}
      {error && <p className="newscards__error">{error}</p>}
      <div className="newscards__list">
        {articles.slice(0, visibleCards).map((article, index) => (
          <NewsCard isLoggedIn={isLoggedIn}
            key={index}
            keyword={article.keyword}
            title={article.title}
            date={new Date(article.publishedAt).toDateString()}
            source={article.source.name}
            description={article.description}
            imageUrl={article.urlToImage}
          />
        ))}
      </div>
      {visibleCards < articles.length && (
        <button type="button" className="newscards__button" onClick={showMoreCards}>
          Show more
        </button>
      )}
    </div>
  );
}

export default NewsCardList;
