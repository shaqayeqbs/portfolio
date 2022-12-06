import React from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MyModal = ({ children, onClose }) => {
  return (
    <div className={classes.container}>
      <div className={classes.overlays} onClick={onClose}></div>
      <div className={classes.modal}>
        <button onClick={onClose} className={classes.closeBtn} dir="rtl">
          {" "}
          <AiOutlineCloseCircle />
        </button>
        {children}
      </div>
    </div>
  );
};

function Modal({ children, onClose }) {
  return ReactDom.createPortal(
    <MyModal onClose={onClose} children={children} />,
    document.getElementById("portal")
  );
}

export default Modal;
