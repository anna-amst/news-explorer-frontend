import "./SavedNewsHeader.css";

function SavedNewsHeader({openModal, isLoggedIn}) {
    return(
        <header className="saved-news__header">
      <h1 className="saved-news__header__title">News Explorer</h1>
      <Navigation openModal={openModal} isLoggedIn={isLoggedIn} />
    </header>
    )
}

export default SavedNewsHeader;