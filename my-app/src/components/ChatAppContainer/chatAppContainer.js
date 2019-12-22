import React, {Component} from 'react';
import MatchesWindow from "../MatchesWindow/matchesWindow";
import ChatWindow from "../ChatWindow/ChatWindow";
import UserInfo from "../UserInfo/userInfo";



class ChatAppContainer extends Component {
    render() {

        const {data}=this.props;


        this.activeContent=Object.keys(data)[0];


        return (
            <div className={"message-container"}>
                <MatchesWindow data={data} topics={Object.keys(data)}/>
                <ChatWindow data={data}  messages={data[this.activeContent].messages}/>
                <UserInfo data={data} />
            </div>
        );

    }
}
export default ChatAppContainer;