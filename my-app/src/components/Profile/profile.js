import React, {Component} from 'react';
import Button from "../Button/button";
import "./css/style.scss";
import Header from "../Header/header";
import Input from "../Input/input";

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
                           <Button classes={btnClasses} value={"like"} info={"Like"}/>
                            <form action="">
                            <label htmlFor="file" className="profile__circle-btn-blue"><svg className="Sq(32px) Sq(28px)--xs profile__camera" viewBox="0 0 24 24" width="24px" height="24px"
                                                                                            focusable="false" aria-hidden="true" role="presentation">
                                <path className="Fill(#fff)"
                                      d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"/>
                            </svg></label>
                            <Input type={'file'} id={'file'}/>
                            <h2 className={"profile__info-btn-blue"}>Upload Photo</h2>
                            </form>
                           <Button classes={btnClasses} value={"pencil"} info={"Edit"}/>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Profile;