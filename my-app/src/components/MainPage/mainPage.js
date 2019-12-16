import React, {Component} from 'react';
import Navbar from "../Navbar/navbar";
import Header from "./header";
import Button from "../Button/button";
class MainPage extends Component {
    render() {
        return (
            <div className="main-page">
                <Navbar/>
                <Header/>
                <Button class_name={"main-page-buttons"} value={"Sign Up"}  info={"Test"}/>
            </div>
        );
    }
}

export default MainPage;