import React, {Component} from 'react';

class SingleMessage extends Component {
    classNameOption="";
    render() {
        const {from,msg}=this.props;
        {from==="me"?this.classNameOption="single-message-text-other":this.classNameOption="single-message-text-self"}
        return (
            <div className={this.classNameOption}>

                <p className={"single-message-text"}>{msg}</p>
            </div>
        );
    }
}

export default SingleMessage;


