import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8081/users/getAll', { useCredentails: true }).then(res => {
            this.setState({ users: res.data });
        });
    }

    handleDelete = (userId) => {
        axios.delete('http://localhost:8081/users/delete/' + userId)
            .then(() => {
                window.location.reload();
            }).catch(err => {
                alert(err);
            });
    }

    render() {
        return <ul className="list-group user-list">
            {this.state.users.map(user =>
                <li className="list-group-item list-group-item-action" key={user.id}>
                    <NavLink to={`/users/get/${user.id}`}>{user.firstName} {user.lastName} {user.userState}</NavLink>
                    <NavLink to={`/users/update/${user.id}`}><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateUser"><i class="fas fa-user-edit"></i></button></NavLink>
                    <button type="button" className="btn btn-danger" onClick={this.handleDelete.bind(this, user.id)}><i class="fas fa-user-times"></i></button>
                </li>)}
        </ul>
    }
}