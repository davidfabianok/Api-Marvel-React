import React from "react";
import Wrapper from "./wrapper";
import "./style.scss";

const Modal = ({children, show, onClose}) => {
  return (
    show && (
      <Wrapper className="modal">
        <div className="modal--content">
          <button className="modal--content__btn-close" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </Wrapper>
    )
  );
};

export default Modal;
