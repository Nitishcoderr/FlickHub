import React from 'react';
import logo from '../images/logo.png';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        navigate('/error')
      });
  };
  return (
    <div className="absolute w-full z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-32"
        src={logo}
        alt="logo"
      />
      {user && <div className='flex items-center justify-center'>
        <img className='w-16 p-2  rounded-full' src={user?.photoURL} alt="img" />
        <button
          onClick={handleSignOut}
          className="bg-red-600 font-semibold rounded-lg px-2 py-3 text-white">
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
