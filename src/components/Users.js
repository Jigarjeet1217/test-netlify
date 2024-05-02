import React from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  return (
    <div>
      <Link to={'profile'}>User Profile</Link>
      <br />
      <Link to={'account'}>User Account</Link>
      <br />
      Users Page
    </div>
  );
};

export default Users;
