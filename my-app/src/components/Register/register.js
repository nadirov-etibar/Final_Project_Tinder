import React, {Component} from "react";

import Input from "../Input/input";
import "./register.scss";
import "./media_register.scss"
import { Link } from "react-router-dom";

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            pass: "",
            day: "",
            imageUrl: "",
            errors: {
                fullName: '',
                email: '',
                pass: '',
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'fullName':
                errors.fullName =
                    value.length < 7
                        ? 'Name must be 7 characters long!'
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'pass':
                errors.pass =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            default:
                break;
        }
        this.setState({errors, [name]: value});
    };

    clickChange = () => {
        if (document.getElementById("man").checked){
            console.log(document.getElementById("man").value);
        }
        else if (document.getElementById("woman").checked){
            console.log(document.getElementById("woman").value);
        }
    };

    getVal = () => {
        let day = document.getElementById("day").value;
        let month = document.getElementById("month").value;
        let year = document.getElementById("year").value;

        let birthDay = day+"."+month+"."+year;

        console.log(birthDay);
    };

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

    render() {
        const {fullName, email, pass, errors, day, month, year} = this.state;
        const eroors = !Object.keys(errors).some(x => errors[x]);
        const isEnabled =fullName.length > 0 && email.length > 0 && pass.length > 0 && eroors;
        console.log(this.state.imageUrl)
        return (
            <div className={"register"}>
                <div>
                    <h2 className={"register__header"}>create account</h2>
                </div>
                <form className={"register__form"}  method={"post"}>
                    <div className={"register__form-first"}>
                        <label htmlFor="name">Full Name</label>
                        <svg className="register__svg" viewBox="0 0 24 24" width="24px" height="24px" focusable="false"
                             aria-hidden="true" role="presentation">
                            <path d="M16.085 13.026c1.285-.975 2.088-2.625 2.088-5.55 0-3-2.65-5.476-5.861-5.476C9.1 2 6.45 4.4 6.45 7.475c0 3 .803 4.726 2.168 5.7-2.73 1.576-5.38 4.576-4.416 6.076 2.007 3.525 15.095 3.75 16.7.15.643-1.725-2.006-4.65-4.817-6.375" />
                        </svg>
                        <Input class_name={"register__form-inputs register__all-inputs"} name={"fullName"} type={'text'} placeholder={"Name"} id={'name'}
                               onchange={this.handleChange} req={"required"}/>

                        {errors.fullName.length > 0 &&
                        <span className='error'>{errors.fullName}</span>}
                        <label htmlFor="email">Email</label>
                        <svg className="register__svg" viewBox="0 0 24 24" width="24px" height="24px" focusable="false"
                             aria-hidden="true" role="presentation">
                            <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                        </svg>
                        <Input class_name={"register__form-inputs register__all-inputs"} name={"email"} type={'email'} placeholder={"Email address"} id={'email'}
                               onchange={this.handleChange}   req={"required"}/>

                        {errors.email.length > 0 &&
                        <span className='error'>{errors.email}</span>}
                        <label htmlFor="pass">Password</label>
                        <svg className="register__svg" viewBox="0 0 512 512" width="24px" height="24px" focusable="false"
                             aria-hidden="true" role="presentation">
                            <path d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"/>
                        </svg>
                        <Input class_name={"register__form-inputs register__all-inputs"} name={"pass"} type={'password'} placeholder={"Password"} id={'pass'}
                               onchange={this.handleChange}  />

                        {errors.pass.length > 0 &&
                        <span className='error'>{errors.pass}</span>}
                    </div>
                    <div className={"register__form-second"}>
                        <label>Gender</label>
                        <div className={"register__flex"}>
                            <Input type={"radio"} name={'gender'} id={'man'} class_name={"register__gender"} value={"Male"} onchange={this.clickChange}/>
                            <label htmlFor="man">Man</label>
                            <Input type={"radio"}  name={'gender'} id={'woman'} class_name={"register__gender"} value={"Female"} onchange={this.clickChange}/>
                            <label htmlFor="woman">Woman</label>
                        </div>
                        <label>Birthday</label>
                        <div className={"register__flex"}>
                            <Input type={'text'} class_name={"register__date register__all-inputs"} placeholder={"DD"} maxlength={2} name={"day"} id={"day"} onchange={this.getVal}/>
                            <Input type={'text'} class_name={"register__date register__all-inputs"} placeholder={"MM"} maxlength={2} name={"month"} id={"month"} onchange={this.getVal}/>
                            <Input type={'text'} class_name={"register__date register__all-inputs"} placeholder={"YYYY"} maxlength={4} name={"year"} id={"year"} onchange={this.getVal}/>
                        </div>
                        <label>Profile Photo</label>
                        <label htmlFor="file" className="register__file-upload register__all-inputs">Upload From Computer</label>
                        <input
                            ref="uploadImg"
                            type="file"
                            name="selectedFile"
                            id="file"
                            onChange={this._onChange}
                            required
                        />
                    </div>
                    <div className={"login__btn-block"}>
                    <Link to="/swipe">
                        <Input type={"submit"} value={"CONTINUE"} class_name={"login__btn"} name={"submit"} disable={!isEnabled}/>
                    </Link>
                    </div>
                </form>

            </div>
        );
    }
}

export default Register;