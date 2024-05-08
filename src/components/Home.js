import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Link to={'/about'}>About Us</Link>
      <br />
      <Link to={'/contacts'}>Contacts</Link>
      <div>Home</div>
      <button type='button' onClick={() => setOpen(!open)}>
        Open Modal
      </button>
      {open && (
        <Modal
          // ref={modalRef}
          isOpen={open}
          styles={{
            width: window.screen.width * 0.7,
            height: window.screen.height * 0.7,
          }}
          content={'from modal'}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default Home;
