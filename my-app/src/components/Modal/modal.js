import React from "react";
import Input from "../Input/input";
import Button from "../Button/button";
import "./modal.scss"
export default class Modal extends React.Component {
    render() {
        const btnClasses = {
            btn: 'register__btn'
        };
        return (
            <div className={"register"}>
                <svg className="" viewBox="0 0 24 24" width="24px" height="24px" focusable="false"
                     aria-hidden="true" role="presentation">
                    <path d="M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z"
                        fill="blue"/>
                </svg>
                <h2 className={"register__modal-header"}>Get Started</h2>
                <form className={"register__form"}>
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
                    </form>
                <Button value={"CONTINUE"} classes={btnClasses}/>
            </div>
        )
    }

}