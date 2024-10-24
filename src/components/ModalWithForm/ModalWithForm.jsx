import "./ModalWithForm.css";

function ModalWithForm({isOpen, closeModal}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">Sign In</h2>
        <button type="button" className="modal__close" onClick={closeModal}></button>
        <form className="modal__form">
          <label htmlFor="email" className="modal__label">
            Email
            <input
              type="email"
              className="modal__input"
              id="email"
              required
              placeholder="example@test.com"
              name="email"
            ></input>
          </label>
          <label htmlFor="password" className="modal__label">Password
            <input
              type="text"
              className="modal__input"
              id="password"
              required
              name="password"
              placeholder="••••••••"
            ></input>
          </label>
        </form>
        <button type="submit" className="modal__sign-in-button">Sign in</button>
        <button type="button" className="modal__sign-up-button">or Sign up</button>
      </div>
    </div>
  );
}

export default ModalWithForm;
