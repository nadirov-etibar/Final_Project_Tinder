import React, {Component} from 'react';
import "./css/style.scss";

class MessageInput extends Component {
    render() {
        return (
            <div className={"msg-container"}>
                <form action="" className={"msg-container__form"}>

                    <input type="text" id="optional-input" className={"msg-container__input"}/>
                    <input type="submit" value={"Send"} className={"msg-container__button"}/>
                </form>
            </div>

        );
    }
}

export default MessageInput;