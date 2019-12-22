import React, {Component} from 'react';
import Topic from "../Topic/topic";
class MatchesWindow extends Component {

    render() {
        const {data}=this.props;
        return (
            <div className={"matches-window"} >
                <p className={"matches-text"}>Matches</p>
                {this.props.topics.map(topic=>
                    <Topic image={data[topic].info.pics[0]} key={topic} name={topic}/>
                )}
            </div>
        );
    }
}

export default MatchesWindow;