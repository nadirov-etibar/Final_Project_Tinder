import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import './App.css';
import logo from './logo.svg';
import './App.css';
import MainPage from "./components/MainPage/mainPage";
import Profile from "./components/Profile/profile";
import Deck from "./components/Swipe/Deck";
import Register from "./components/Register/register";
import Edit from "./components/Edit/edit";
import Header from "./components/Header/header";
import Message from "./components/Message/message";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <MainPage/>
                    </Route>
                    <Route path="/profile">
                        <Header/>
                        <Profile/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/swipe">
                        <Header/>
                        <Deck />
                    </Route>
                    <Route path="/edit">
                        <Header/>
                        <Edit />
                    </Route>
                    <Route path="/message">
                        <Header/>
                        <Message/>
                    </Route>
                </Switch>

                </div>
            </Router>
  );
}

export default App;
