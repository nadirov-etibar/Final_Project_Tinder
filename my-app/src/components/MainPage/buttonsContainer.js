import React, {Component} from 'react';
import Button from "../Button/button";

class ButtonsContainer extends Component {
    render() {
        return (
            <div className={"buttons-container"}>
                <Button class_name={"main-page-buttons"} value={"Sign Up"}/>
                <Button class_name={"main-page-buttons"} value={"Log In"}/>
            </div>
        );
    }
}

export default ButtonsContainer;