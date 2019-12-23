import React, {Component} from 'react';
import "./css/style.scss";

class SingleMessage extends Component {
    classNameOption="";
    render() {
        const {from,msg}=this.props;
        {from==="me"?this.classNameOption="single-message__text-other":this.classNameOption="single-message__text-self"}
        return (
            <div className={this.classNameOption}>

                <p className={"single-message__text"}>{msg}</p>
            </div>
        );
    }
}

export default SingleMessage;


