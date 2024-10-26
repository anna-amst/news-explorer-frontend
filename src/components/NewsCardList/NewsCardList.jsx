import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList() {
    return(
        <div className="newscards__section">
        <h1 className="newscards__title">Search results</h1>
        <div className="newscards__list">
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
        <button type="button" className="newscards__button">Show more</button>
        </div>
    )
}

export default NewsCardList;