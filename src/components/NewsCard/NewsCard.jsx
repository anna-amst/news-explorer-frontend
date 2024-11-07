import "./NewsCard.css";

function NewsCard({ title, date, source, description, imageUrl, isLoggedIn, keyword}) {

  // const handleSaveClick = () => {
  //   if(isLoggedIn) {
  //     onSave({title, date, source, description, imageUrl, keyword});
  //   }
  // };

  // const handleDeleteClick =() => {
  //   if (isLoggedIn) {
  //     onDelete({title, date, source, description, imageUrl, keyword});
  //   }
  // };


  return (
    <div className="card__container">
      {isLoggedIn ? (
        <>
          <div className="card__keyword">{keyword}</div>
          <button className="card__delete-btn"></button>
          <div className="card__delete-confirm">Remove from saved</div>
        </>
      ) : (
        <>
          <button type="button" className="card__bookmark"></button>
          <div className="card__save-confirm">Sign in to save articles</div>
        </>
      )}
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
