import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import signupimage from './images/signupimage.svg'
import Signin from './components/Signin';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signup/>}></Route>
          <Route exact path="/login" element={<Signin/>}></Route>
          <Route exact path="/home" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
