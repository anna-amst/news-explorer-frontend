import "./NewsCard.css";

function NewsCard({ title, date, source, description, imageUrl }) {
  return (
    <div className="card__container">
      <button type="button" className="card__bookmark"></button>
      {imageUrl && <img className="card__image" src={imageUrl} alt={title} />}
      <div className="card__info">
        <p className="card__date">{date}</p>
        <h1 className="card__title">{title}</h1>
        <p className="card__description">{description}</p>
        <p className="card__source">{source}</p>
      </div>
    </div>
  );
}

export default NewsCard;
