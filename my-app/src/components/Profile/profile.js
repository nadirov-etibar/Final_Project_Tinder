import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Button from "../Button/button";
import "./css/modal.scss";
import "./css/style.scss";
import Header from "../Header/header";
import Modal from '@material-ui/core/Modal';
import Input from "../Input/input";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: "",
            open: false,
            setOpen: false,
        }
    }

    render() {
        const btnClasses = {
            btn: 'profile__circle-btn'
        };

        const exitBtn = {
            btn: 'profile__exit-btn'
        };

        return (
            <div>
                    <div className={"profile"}>
                        <div className={"profile__top"}>
                            <img src={this.state.imageUrl} alt="" className={"profile__img"}/>
                            <div className={"profile__info"}>
                                <p className={"profile__name"}>Rauf</p>
                                <p className={"profile__age"}>21</p>
                            </div>
                            <Button classes={btnClasses} value={"exit"}/>
                        </div>
                        <div className={"profile__bottom"}>
                           <Button classes={btnClasses} value={"like"} info={"Like"} function_name={this.handleOpen}/>
                            <Modal
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                                open={this.state.open}
                                className={"modal"}
                                onClose={this.handleClose}
                            >
                                <div className={"like like__modal-window"}>
                                    <div className={"like__close"}>
                                        <svg className="like__tinder" viewBox="0 0 24 24" width="37px" height="37px" focusable="false"
                                             aria-hidden="true" role="presentation">
                                            <path d="M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z"
                                                  fill="cornflowerblue"/>
                                        </svg>
                                        <div className={"like__close-element"} onClick={this.handleClose}>

                                            <svg className="like__cross" viewBox="0 0 24 24" width="24px" height="24px"
                                                 focusable="false" aria-hidden="true" role="presentation">
                                                <path className="" fill={"cornflowerblue"}
                                                      d="M14.926 12.56v-1.14l5.282 5.288c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L11.512 15h1.138l-5.363 5.125c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417l5.201-5.288v1.14L3.873 7.27c-1.137-.976-1.137-2.44 0-3.417a1.973 1.973 0 0 1 3.251 0l5.282 5.207H11.27l5.444-5.207c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417l-5.2 5.288z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                            <form action="" className={"profile__form"}>
                            <label htmlFor="file" className="profile__circle-btn-blue"><svg className="Sq(32px) Sq(28px)--xs profile__camera" viewBox="0 0 24 24" width="30px" height="30px"
                                                                                            focusable="false" aria-hidden="true" role="presentation">
                                <path className="Fill(#fff)"
                                      d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"/>
                            </svg>
                                <div className={"profile__plus"}></div>
                            </label>
                                <input
                                    ref="uploadImg"
                                    type="file"
                                    name="selectedFile"
                                    id="file"
                                    onChange={this._onChange}
                                />
                                <h2 className={"profile__info-btn-blue"}>Upload Photo</h2>
                            </form>
                            <Link to="/edit">
                                <Button classes={btnClasses} value={"pencil"} info={"Edit"}/>
                            </Link>

                        </div>
                    </div>
            </div>
        );
    }
    _onChange = (e) => {

        const file    = this.refs.uploadImg.files[0];
        const reader  = new FileReader();

        reader.onloadend = () => {
            this.setState({
                imageUrl: reader.result
            })
        };
        if (file) {
            reader.readAsDataURL(file);
            this.setState({
                imageUrl :reader.result
            })
        }
        else {
            this.setState({
                imageUrl: ""
            })
        }
    };

    handleOpen = () => {
        this.setState({
            open: true,
            setOpen: true
        })
    };
    handleClose = () => {
        this.setState({
            open: false,
            setOpen: false
        })
    };
}

export default Profile;
