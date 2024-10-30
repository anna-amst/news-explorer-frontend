import "./ModalWithForm.css";

function ModalWithForm({title, children, isOpen, closeModal}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button type="button" className="modal__close" onClick={closeModal}></button>
        <form className="modal__form">
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
