import React from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MyModal = ({ children, onClose }) => {
  return (
    <div className="relative ">
      <div className={classes.overlays} onClick={onClose}></div>
      <div className={`${classes.modal} w-[90%] md:w-[50%]`}>
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
