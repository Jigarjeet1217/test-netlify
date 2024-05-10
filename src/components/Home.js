import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import HoverCount from '../custom/HoverCount';
import Counter from '../custom/Counter';
// import Modal from './Modal';

const Home = () => {
  // const [open, setOpen] = useState(false);
  return (
    <div>
      <Link to={'/about'}>About Us</Link>
      <br />
      <Link to={'/contacts'}>Contacts</Link>

      <div>Home</div>
      <div
        style={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <HoverCount />
        <Counter />
      </div>
      {/* <button type='button' onClick={() => setOpen(!open)}>
        Open Modal
      </button> */}
      {/* {open && (
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
      )} */}
    </div>
  );
};

export default Home;
