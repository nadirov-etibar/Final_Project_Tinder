import React, {Component} from 'react';

class Button extends Component {

    render() {
        const {class_name, value, info=""}=this.props;
        return (
            <div>
                <button className={class_name}>
                    {value}
                </button>
                {info!==""?<h2>{info}</h2>:null}
            </div>
        );
    }
}

export default Button;