import React, {Component} from 'react';
import Header from "../Header/header";
import ChatAppContainer from "../ChatAppContainer/chatAppContainer";
import MessageInput from "../MessageInput/messageInput";
import "./css/style.scss";

class Message extends Component {

    render() {
        const data={
            Rauf: {
                info:{
                    pics: [
                        "https://images.unsplash.com/photo-1520024146169-3240400354ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    ],
                    name: "Rauf Ismayilov",
                    age: 32,
                    distance: "4 miles away",
                    text: "bla bla bla bla bla bla"
                },
                messages:[
                    {from: 'Rauf',msg: 'hello Rauf old test'},
                    {from: 'me',msg: 'hello Rauf'},
                    {from: 'me',msg: 'hello Rauf'},
                    {from: 'me',msg: 'hello Rauf'},
                    {from: 'Rauf',msg: 'hello Rauf'},
                    {from: 'me',msg: 'hello Rauf'},
                    {from: 'Rauf',msg: 'hello Rauf'},
                    {from: 'me',msg: 'hello Rauf'},
                    {from: 'Rauf',msg: 'hello Rauf'},
                    {from: 'me',msg: 'hello Rauf'},
                    {from: 'me',msg: 'hello Rauf'},
                    {from: 'me',msg: 'hello Rauf'},
                    {from: 'Rauf',msg: 'hello Rauf'},
                    {from: 'me',msg: 'hello Rauf'},
                    {from: 'Rauf',msg: 'hello Rauf'},
                    {from: 'Rauf',msg: 'hello Rauf'},
                    {from: 'Rauf',msg: 'hello Rauf'},
                    {from: 'Rauf',msg: 'hello Rauf new test'},
                ]
            },
            Asif: {
                info:{
                    pics: [
                        "https://images.unsplash.com/photo-1520024146169-3240400354ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    ],
                    name: "Asif",
                    age: 32,
                    distance: "4 miles away",
                    text: "bla bla bla bla bla bla"
                },
                messages:[
                    {from: 'Asif',msg: 'hello Rauf old test'},
                    {from: 'me',msg: 'hello Rauf'},
                    {from: 'Asif',msg: 'hello Rauf'},
                    {from: 'me',msg: 'hello Rauf'},
                    {from: 'Asif',msg: 'hello Rauf'},
                    {from: 'me',msg: 'hello Rauf'},
                    {from: 'Asif',msg: 'hello Rauf'},
                    {from: 'me',msg: 'hello Rauf new test'},
                ]
            },
            Nick: {
                info:{
                    pics: [
                        "https://images.unsplash.com/photo-1520024146169-3240400354ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    ],
                    name: "Nick",
                    age: 32,
                    distance: "4 miles away",
                    text: "bla bla bla bla bla bla"
                },
                messages:[
                    {from: 'Nick',msg: 'hello Rauf old test'},
                    {from: 'me',msg: 'hello Rauf'},
                    {from: 'me',msg: 'hello Rauf'},
                    {from: 'Nick',msg: 'hello Rauf'},
                    {from: 'me',msg: 'hello Rauf'},
                    {from: 'me',msg: 'hello Rauf'},
                    {from: 'me',msg: 'hello Rauf'},
                    {from: 'Nick',msg: 'hello Rauf'},
                    {from: 'me',msg: 'hello Rauf'},
                    {from: 'Nick',msg: 'hello Rauf'},
                    {from: 'me',msg: 'hello Rauf new test'},
                ]
            },
            Slava: {
                info:{
                    pics: [
                        "https://images.unsplash.com/photo-1520024146169-3240400354ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    ],
                    name: "Slava",
                    age: 32,
                    distance: "4 miles away",
                    text: "bla bla bla bla bla bla"
                },
                messages:[
                    {from: 'me',msg: 'hello Rauf old test'},
                    {from: 'Slava',msg: 'hello Rauf'},
                    {from: 'Slava',msg: 'hello Rauf'},
                    {from: 'Slava',msg: 'hello Rauf'},
                    {from: 'me',msg: 'hello Rauf new test'},
                ]
            },
        };
        return (
            <div className={"message-box-app"}>
                <ChatAppContainer data={data}/>
                <MessageInput />
            </div>
        );
    }
}

export default Message;