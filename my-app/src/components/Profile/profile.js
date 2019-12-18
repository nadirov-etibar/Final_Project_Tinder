import React, {Component} from 'react';
import Button from "../Button/button";
import "./css/style.scss";
import Header from "../Header/header";

class Profile extends Component {
    render() {
        const btnClasses = {
            btn: 'profile__circle-btn'
        };
        return (
            <div >
                <Header/>
                    <div className={"profile"}>
                        <div className={"profile__top"}>
                            <img src={require("./img/profile.jpg")} alt="" className={"profile__img"}/>
                            <div className={"profile__info"}>
                            <p className={"profile__name"}>Rauf</p>
                            <p className={"profile__age"}>21</p>
                            </div>
                        </div>
                        <div className={"profile__bottom"}>
                           <Button classes={btnClasses} value={"setting"}/>
                           <Button classes={btnClasses} value={"camera"}/>
                           <Button classes={btnClasses} value={"pencil"}/>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Profile;