import "./errormessage.scss";

const ErrorMessage = (props) => {
  const { message, handleModal } = props;
  const handleClick = (e) => {
    if (
      e.target.className === "overlay" ||
      e.target.className === "modal__button"
    )
      handleModal("");
    return;
  };
  return (
    <div onClick={handleClick} className="overlay">
      <ModalWindow errorMessage={message} />
    </div>
  );
};

const ModalWindow = (props) => {
  const { errorMessage } = props;

  /*   const heandleClick = (e) => {
    handleModal("");
  }; */

  return (
    <div className="modal">
      <div className="modal__header">Некорректный ввод</div>
      <div className="modal__descr">
        <div className="modal__text">{errorMessage}</div>
        <button className="modal__button">Закрыть</button>
      </div>
    </div>
  );
};

export default ErrorMessage;
