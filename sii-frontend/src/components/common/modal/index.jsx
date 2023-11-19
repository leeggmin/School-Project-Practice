import React from "react";
import "./style.css";

const Modal = ({ isOpened, onClose, children }) => {
  return (
    <>
      {isOpened && (
        <div className="modalBackground" onClick={onClose}>
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
