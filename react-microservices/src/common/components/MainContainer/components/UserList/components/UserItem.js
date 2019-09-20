import React from 'react';
import axios from 'axios';

export default class UserItem extends React.Component {
    state = {
        user: ''
    }

    componentDidMount() {
        axios.get('http://localhost:8081/users/get/' + this.props.id).then(res => {
            this.setState({ user: res.data });
        });
    }

    render() {
        return <div>
                    <h1>{this.state.user.userName}</h1>
                        <br />
                    <h2>{this.state.user.userState}</h2>
                </div>
    }
}
