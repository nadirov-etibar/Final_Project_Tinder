import React, {Component} from 'react';

class UserInfo extends Component {
    render() {
        return (
            <div>
                <img src="https://images.unsplash.com/photo-1520024146169-3240400354ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                     className={"user-msg-info-img"}
                     alt="img"/>
                     <h2 className={"user-msg-info-header"}>Name Surname, 22</h2>
                <p className={"user-msg-info-text"}>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Aut cumque dicta dolorem expedita
                    iure neque officia quis rem
                    repellat repudiandae!</p>
            </div>
        );
    }
}

export default UserInfo;