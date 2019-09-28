import React from 'react';
import axios from 'axios';

export default class AddUserToList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({
            firstName: event.target.value,
            lastName: event.target.value,
            userName: event.target.value,
            password: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            userName: document.getElementById("userName").value,
            password: document.getElementById("password").value,
        };

        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }

        axios.post('http://localhost:8081/users/add/?firstName=' + user.firstName +
            '&lastName=' + user.lastName +
            '&userName=' + user.userName +
            '&password=' + user.password,
            { config }).then(() => {
                window.location.reload();
            }).catch(err => {
                alert(err);
            });
    }

    render() {
        return (
            <div className='addUserToList'>
                <div>
                    <div>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addUserToList">+ Add User</button>
                    </div>
                    <div className="modal fade" id="addUserToList" tabIndex="-1" role="dialog" aria-labelledby="addUserToListLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="addUserToListLabel">Fyll users information</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div>
                                        <form onSubmit={this.handleSubmit}>
                                            <input type="text" id="firstName" className="form-control" placeholder="Firstname" onChange={this.handleChange} />
                                            <br />
                                            <input type="text" id="lastName" className="form-control" placeholder="Lastname" onChange={this.handleChange} />
                                            <br />
                                            <input type="text" id="userName" className="form-control" placeholder="Username" onChange={this.handleChange} />
                                            <br />
                                            <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange}></input>
                                            <br />
                                            <button type="button" className="btn btn-primary" type="submit" value="Submit">Save</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}