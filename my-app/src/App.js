import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from "./components/MainPage/mainPage";
import Profile from "./components/Profile/profile";
import Deck from "./components/Deck";

function App() {
  return (
    <div className="App"> 
      <MainPage/>
      <Profile/>
      <Deck />
    
    </div>
  );
}

export default App;
