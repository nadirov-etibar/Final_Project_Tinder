import React, {Component} from 'react';

class Topic extends Component {
    render() {
        return (
            <div className={"topic-container"}>

                    <img className={"topic-img-container"} src={this.props.image} alt="image"/>

                <h4 className={"topic-header"}>{this.props.name}</h4>
            </div>
        );
    }
}

export default Topic;