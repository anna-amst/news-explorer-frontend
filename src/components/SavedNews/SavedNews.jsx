import "./SavedNews.css"

function SavedNews() {
    return(
        <>
        <div className="savednews__section">
            <p className="savednews__title">Saved articles</p>
            <h1 className="savednews__info">Elise, you have 5 saved articles</h1>
            <div className="savednews__keywords__container">
            <p className="savednews__keywords-title">By keywords:</p>
            <p className="savednews__keywords">Nature, Yellowstone, and 2 other</p>
            </div>
        </div>
        </>
    )
}

export default SavedNews;