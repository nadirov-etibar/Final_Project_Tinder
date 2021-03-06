import React, {Component} from 'react';

class Input extends Component {
    render() {
        const {class_name, type, id, name, placeholder, maxlength, value, onchange, req=null,
            disable, isCanSent}=this.props;
        return (
                <input className={class_name} type={type} name={name} placeholder={placeholder} id={id} maxLength={maxlength}
                value={value} onChange={onchange} required={req} disabled={disable}/>
        );
    }
}

export default Input;