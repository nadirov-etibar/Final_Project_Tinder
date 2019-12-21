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
import Input from "../Input/input";
import Modal from '@material-ui/core/Modal';
export default function MainPage() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };
        const btnClasses = {
            btn: 'main-page__buttons'
        };
        return (
            <div className="main-page">
                <div className="main-page__navbar">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="fire"
                         className="svg-inline--fa main-page__navbar-logo fa-fire fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 384 512">
                        <path fill="currentColor" d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"/>
                    </svg>
                    <h2>Tinder</h2>
                </div>
                <h1 className="main-page__header">Match. Chat. Date.</h1>
                <div className={"main-page__button-center"}>

                    <Link to="/register">
                        <Button classes={btnClasses} value={"Sign Up"}/>
                    </Link>
                    <Button classes={btnClasses} value={"Log in"} function_name={handleOpen}/>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={open}
                        className={"modal"}
                        onClose={handleClose}
                    >
                        <div className={"register register__modal-window"}>
                            <div className={"register__close"}>
                                <div className={"register__close-element"} onClick={handleClose}>
                                    <svg className="register__cross" viewBox="0 0 24 24" width="24px" height="24px"
                                         focusable="false" aria-hidden="true" role="presentation">
                                        <path className="" fill={"cornflowerblue"}
                                              d="M14.926 12.56v-1.14l5.282 5.288c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L11.512 15h1.138l-5.363 5.125c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417l5.201-5.288v1.14L3.873 7.27c-1.137-.976-1.137-2.44 0-3.417a1.973 1.973 0 0 1 3.251 0l5.282 5.207H11.27l5.444-5.207c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417l-5.2 5.288z"/>
                                    </svg>
                                </div>
                            </div>
                            <svg className="" viewBox="0 0 24 24" width="24px" height="24px" focusable="false"
                                 aria-hidden="true" role="presentation">
                                <path d="M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z"
                                      fill="cornflowerblue"/>
                            </svg>
                            <h2 className={"register__modal-header"}>Get Started</h2>
                            <form className={"login__form login"}>
                                <div className={"register__form-modal"}>
                                    <label htmlFor="email">Email</label>
                                    <svg className="register__svg" viewBox="0 0 24 24" width="24px" height="24px" focusable="false"
                                         aria-hidden="true" role="presentation">
                                        <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                                    </svg>
                                    <Input class_name={"register__form-inputs register__all-inputs"} type={'email'} placeholder={"Email address"} id={'email'}/>
                                    <label htmlFor="pass">Password</label>
                                    <svg className="register__svg" viewBox="0 0 512 512" width="24px" height="24px" focusable="false"
                                         aria-hidden="true" role="presentation">
                                        <path d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"/>
                                    </svg>
                                    <Input class_name={"register__form-inputs register__all-inputs"} type={'password'} placeholder={"Password"} id={'pass'}/>
                                </div>
                                <div className={"login__btn-block"}>
                                    <Link to="/swipe"><Input type={"submit"} value={"CONTINUE"} class_name={"login__btn"}/>
                                    </Link>
                                    
                                </div>
                            </form>

                        </div>
                    </Modal>
                </div>
            </div>
        );
}
