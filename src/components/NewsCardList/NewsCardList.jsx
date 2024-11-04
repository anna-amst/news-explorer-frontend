import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";

function NewsCardList({ articles, isLoading, error }) {
  return (
    <div className="newscards__section">
      <h1 className="newscards__title">Search results</h1>
      {isLoading && <Preloader />}
      {error && <p className="newscards__error">{error}</p>}
      <div className="newscards__list">
        {articles.map((article, index) => (
          <NewsCard
            key={index}
            title={article.title}
            date={new Date(article.publishedAt).toDateString()}
            source={article.source.name}
            description={article.description}
            imageUrl={article.urlToImage}
          />
        ))}
      </div>
      {articles.length > 0 && (
        <button type="button" className="newscards__button">
          Show more
        </button>
      )}
    </div>
  );
}

export default NewsCardList;
