import React, {Component} from "react";
import Input from "../Input/input";
import "./register.scss";
import "./media_register.scss"
class Register extends Component {
    render() {
        return (
            <div className={"register"}>
                <div>
                    <h2 className={"register__header"}>create account</h2>
                </div>
                <form className={"register__form"}>
                    <div className={"register__form-first"}>
                        <label htmlFor="name">Name</label>
                        <svg className="register__svg" viewBox="0 0 24 24" width="24px" height="24px" focusable="false"
                             aria-hidden="true" role="presentation">
                                <path d="M16.085 13.026c1.285-.975 2.088-2.625 2.088-5.55 0-3-2.65-5.476-5.861-5.476C9.1 2 6.45 4.4 6.45 7.475c0 3 .803 4.726 2.168 5.7-2.73 1.576-5.38 4.576-4.416 6.076 2.007 3.525 15.095 3.75 16.7.15.643-1.725-2.006-4.65-4.817-6.375" />
                        </svg>
                        <Input class_name={"register__form-inputs register__all-inputs"} type={'text'} placeholder={"Name"} id={'name'}/>
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
                    <div className={"register__form-second"}>
                        <label>Gender</label>
                        <div className={"register__flex"}>
                            <Input type={"button"} class_name={"register__gender"} value={"Man"}/>
                            <Input type={"button"} class_name={"register__gender"} value={"Woman"}/>
                        </div>
                        <label>Birthday</label>
                        <div className={"register__flex"}>
                            <Input type={'text'} class_name={"register__date register__all-inputs"} placeholder={"DD"} maxlength={2}/>
                            <Input type={'text'} class_name={"register__date register__all-inputs"} placeholder={"MM"} maxlength={2}/>
                            <Input type={'text'} class_name={"register__date register__all-inputs"} placeholder={"YYYY"} maxlength={4}/>
                        </div>
                        <label>Profile Photo</label>
                        <label htmlFor="file" className="register__file-upload register__all-inputs">Upload From Computer</label>
                        <Input type={'file'} id={'file'}/>
                    </div>
                    <div className={"login__btn-block"}>
                        <Input type={"submit"} value={"CONTINUE"} class_name={"login__btn"}/>
                    </div>
                </form>

            </div>
        );
    }
}

export default Register;