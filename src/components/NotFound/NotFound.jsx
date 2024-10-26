import "./NotFound.css"

function NotFound() {
    return(
        <div className="not-found__section">
        <img className="not-found__icon"/>
        <h1 className="not-found__title">Nothing found</h1>
        <p className="not-found__text">Sorry, but nothing matched your search terms.</p>
        </div>
    )
}

export default NotFound;