import React, {Component} from 'react';
import "./css/style.scss";

class Topic extends Component {
    render() {
        return (
            <div className={"topic"}>

                    <img className={"topic__img-container"} src={this.props.image} alt="image"/>

                <h4 className={"topic__header"}>{this.props.name}</h4>
            </div>
        );
    }
}

export default Topic;