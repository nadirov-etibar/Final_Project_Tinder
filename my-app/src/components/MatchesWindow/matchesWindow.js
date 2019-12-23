import React, {Component} from 'react';
import Topic from "../Topic/topic";
import "./css/style.scss";

class MatchesWindow extends Component {
    render() {
        const {data}=this.props;
        return (
            <div className={"matches"} >
                <p className={"matches__text"}>Matches</p>
                {this.props.topics.map(topic=>
                    <Topic image={data[topic].info.pics[0]} key={topic} name={topic}/>
                )}
            </div>
        );
    }
}

export default MatchesWindow;