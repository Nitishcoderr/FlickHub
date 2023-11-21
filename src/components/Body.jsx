import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/Slice/userSlice';
import {useDispatch} from 'react-redux'

const Body = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      } else {
        dispatch(removeUser())
      }
    });
  }, [])
  
    
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={ <Login />} />
        <Route path="/browse" element={<Browse/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Body;
