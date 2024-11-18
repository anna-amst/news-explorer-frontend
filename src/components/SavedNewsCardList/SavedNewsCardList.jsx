import "./SavedNewsCardList.css";

function SavedNewsCardList() {
  return (
    <div className="savednews__section">
      <div className="savednews__container">
        <div className="card__container">
          <button className="card__delete-btn"></button>
          <div className="card__delete-confirm">Remove from saved</div>
          <img className="card__image"></img>
          <div className="card__info">
            <p className="card__date">November 4, 2020</p>
            <h1 className="card__title">
              Everyone Needs a Special 'Sit Spot' in Nature
            </h1>
            <p className="card__description">
              Ever since I read Richard Louv's influential book, "Last Child in
              the Woods," the idea of having...
            </p>
            <p className="card__source">TREEHUGGER</p>
          </div>
        </div>
        <div className="card__container">
          <button className="card__delete-btn"></button>
          <div className="card__delete-confirm">Remove from saved</div>
          <img className="card__image"></img>
          <div className="card__info">
            <p className="card__date">November 4, 2020</p>
            <h1 className="card__title">
              Everyone Needs a Special 'Sit Spot' in Nature
            </h1>
            <p className="card__description">
              Ever since I read Richard Louv's influential book, "Last Child in
              the Woods," the idea of having...
            </p>
            <p className="card__source">TREEHUGGER</p>
          </div>
        </div>
        <div className="card__container">
          <button className="card__delete-btn"></button>
          <div className="card__delete-confirm">Remove from saved</div>
          <img className="card__image"></img>
          <div className="card__info">
            <p className="card__date">November 4, 2020</p>
            <h1 className="card__title">
              Everyone Needs a Special 'Sit Spot' in Nature
            </h1>
            <p className="card__description">
              Ever since I read Richard Louv's influential book, "Last Child in
              the Woods," the idea of having...
            </p>
            <p className="card__source">TREEHUGGER</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedNewsCardList;
