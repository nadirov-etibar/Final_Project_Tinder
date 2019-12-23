import React, {Component} from 'react';
import SingleMessage from "../SingleMessage/singleMessage";
import "./css/style.scss";

class ChatWindow extends Component {
    counterKey=0;
    render() {
        const {data}=this.props;
        return (
            <div className={"chat-container"}>

                {this.props.messages.map((message)=>{
                    this.counterKey++;
                    return <SingleMessage image={"https://images.unsplash.com/photo-1520024146169-3240400354ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"}
                                          key={this.counterKey}
                                          from={message.from}
                                          msg={message.msg}/>

                })}
            </div>
        );
    }
}

export default ChatWindow;