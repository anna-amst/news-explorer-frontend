import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList() {
    return(
        <>
        <h1 className="title">Search results</h1>
        <div className="cardlist">
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
        </>
    )
}

export default NewsCardList;