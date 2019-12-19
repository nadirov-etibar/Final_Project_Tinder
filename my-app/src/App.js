import React from 'react';
// import './App.css';
import logo from './logo.svg';
import './App.css';
import MainPage from "./components/MainPage/mainPage";
import Profile from "./components/Profile/profile";
import Register from "./components/Register/register";
import Modal from "./components/Modal/modal.js";
import Deck from "./components/Deck";

function App() {
  return (

    <div className="App">

      {/*<MainPage/>*/}
      {/*<Profile/>*/}
      <Register/>
      <Modal/>
      {/*<Deck />*/}

    </div>
  );
}

export default App;
