import "./MobileNavBar.css"

function MobileNavBar({isOpen, closeModal, handleLoginClick}) {
    return(
        <div className={`mobile-menu ${isOpen} ? "mobile-menu_opened": ""`}>
            <div className="mobile-menu__header">
            <h1 className="mobile-menu__title">News Explorer</h1>
            <button className="mobile-menu__close-button" onClick={closeModal}></button>
            </div>
            <button className="mobile-menu__home-button">Home</button>
            <button className="mobile-menu__sign-in-button" onClick={handleLoginClick}>Sign in</button>

        </div>
    )

}

export default MobileNavBar;