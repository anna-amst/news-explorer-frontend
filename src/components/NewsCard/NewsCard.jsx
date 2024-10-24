import "./NewsCard.css";

function NewsCard() {
    return(
        <div className="card__container">
            <button type="button" className="card__bookmark"></button>
            <img className="card__image"/>
            <p className="card__date">November 4, 2020</p>
            <h1 className="card__title">Everyone Needs a Special 'Sit Spot' in Nature</h1>
            <p className="card__text">Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find</p>
            <p className="card__source">TREEHUGGER</p>
        </div>
    )
}

export default NewsCard;