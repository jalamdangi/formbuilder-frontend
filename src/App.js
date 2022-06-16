import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import signupimage from './images/signupimage.svg'
import Signin from './components/Signin';
import Home from './components/Home';
import Usergeneratedforms from './components/Usergeneratedforms';
import Formresponses from './components/Formresponses';
import Learn from './components/Learn';
import Createform from './components/Createform'
import Formlink from './components/Formlink';
import Test from './components/Test';
import Fetchformbyformid from './components/Fetchformbyformid';
import Copy from './components/Copy';
import Updateform from './components/Updateform';
import Navbar from './components/Navbar';
import Inputtype from './components/Inputtype';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Signup/>}></Route>
          <Route exact path="/inputtype" element={<Inputtype/>}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
          <Route exact path="/login" element={<Signin/>}></Route>
          <Route exact path="/home" element={!localStorage.getItem('user')?<Signin/>:<Home/>}/>
          <Route exact path="/copy" element={<Copy/>}></Route>
          <Route exact path="/learn" element={<Learn/>}></Route>
          <Route exact path="/createform" element={<Createform/>}></Route>
          <Route exact path="/updateform/:id" element={<Updateform/>}></Route>
          <Route exact path="/formlink/:id" element={<Formlink/>}></Route>
          <Route exact path="/fetchformbyformid/:id" element={<Fetchformbyformid/>}></Route>
          <Route exact path="/formresponses/:id" element={<Formresponses/>}></Route>
          <Route exact path="/test" element={<Test/>}></Route>
          <Route exact path="home/createform/:id" element={<Createform/>}></Route>
          <Route exact path="/home/usergeneratedforms" element={<Usergeneratedforms/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
