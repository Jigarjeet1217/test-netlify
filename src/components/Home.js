import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to={'/about'}>About Us</Link>
      <br />
      <Link to={'/contacts'}>Contacts</Link>
      <div>Home</div>
    </div>
  );
};

export default Home;
