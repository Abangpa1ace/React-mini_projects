import React from 'react';

const Modal = ({ closeModal }) => {
  return (
    <div id="modal-container">
      <div className="modal-content">
        <button className="close-modal-btn" onClick={closeModal}>X</button>
        <p>Modal Content</p>
      </div>
    </div>
  )
}

export default Modal;