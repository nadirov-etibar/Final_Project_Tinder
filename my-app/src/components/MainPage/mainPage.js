import React, {Component} from 'react';
import Navbar from "../Navbar/navbar";
import Header from "./header";
import ButtonsContainer from "./buttonsContainer";
class MainPage extends Component {
    render() {
        return (
            <div className="main-page">
                <Navbar/>
                <Header/>
                <ButtonsContainer/>
            </div>
        );
    }
}

export default MainPage;