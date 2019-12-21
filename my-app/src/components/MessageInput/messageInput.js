import React, {Component} from 'react';

class MessageInput extends Component {
    render() {
        return (
            <div className={"input-msg-container"}>
                <form action="">

                    <input type="text" id="optional-input" className={"send-message-text-input"}/>
                    <input type="submit" value={"Send"} className={"send-message-button"}/>
                </form>
            </div>

        );
    }
}

export default MessageInput;