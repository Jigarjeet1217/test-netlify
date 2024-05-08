import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, content, styles, onClose }) => {
  // isOpen contains state of modal - open/closed
  let modalRef = useRef(null); // initialised a rev
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside); // event subscribed
      document.addEventListener('keydown', handleKeyDown); // event subscribed
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // event subscribed is cleaned up
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
  };

  const handleClickOutside = (event) => {
    //modalRef.current returns the node on which ref was applied.
    // event.target returns document node which is clicked.

    // in our case if event.target == modal-back-container modal will be closed
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className='modal-back-container'>
      <div className='modal' style={styles} ref={modalRef}>
        {content}
        <button type='button' onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
