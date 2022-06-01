import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import signupimage from './images/signupimage.svg'
import Signin from './components/Signin';
import Home from './components/Home';
import Createform from './components/Createform';
import Usergeneratedforms from './components/Usergeneratedforms';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signup/>}></Route>
          <Route exact path="/login" element={<Signin/>}></Route>
          <Route exact path='/home' element={!localStorage.getItem('user')?<Signin/>:<Home/>}/>
          <Route exact path="home/createform/:id" element={<Createform/>}></Route>
          <Route exact path="/home/usergeneratedforms" element={<Usergeneratedforms/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
