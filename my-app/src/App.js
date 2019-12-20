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

function App() {
  return (
<Router>
      {/*<MainPage/>*/}
      {/*<Profile/>*/}
      {/*<Edit/>*/}
      {/*<Register/>*/}
      {/*<Deck />*/}
    <div className="App">
<Switch>
          <Route exact path="/">
             <MainPage/>
          </Route>
          <Route path="/profile">
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
        </Switch>

    </div>
    </Router>
  );
}

export default App;
