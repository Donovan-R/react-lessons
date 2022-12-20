import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    const id = setTimeout(() => {
      closeModal();
      return () => clearTimeout(id);
    }, 3000);
  }, [closeModal]);

  return (
    <div>
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
