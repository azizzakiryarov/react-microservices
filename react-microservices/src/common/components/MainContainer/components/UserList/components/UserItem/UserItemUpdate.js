import React from 'react';
import axios from 'axios';

export default class UserItemUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            userState: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({
            firstName: event.target.value,
            lastName: event.target.value,
            userName: event.target.value,
            password: event.target.value,
            userState: event.target.value
        });
    }

    handleSubmit = () => {
        const user = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            userName: document.getElementById("userName").value,
            password: document.getElementById("password").value,
            userState: document.getElementById("userState").value,
        };

        axios.put('http://localhost:8081/users/update/' + this.props.id +
            '?firstName=' + user.firstName +
            '&lastName=' + user.lastName +
            '&userName=' + user.userName +
            '&password=' + user.password +
            '&userState=' + user.userState)
            .then(res => {
                window.location.replace('http://localhost:3000/users/get/' + res.data.id);
            }).catch(err => {
                alert(err);
            });
    }

    render() {
        return <div className="update-users">
            <div>
                <button type="button" className="btn btn-info" data-toggle="modal" data-target="#updateUser"><i class="fas fa-user-edit"></i> Update</button>
            </div>
            <div className="modal fade" id="updateUser" tabIndex="-1" role="dialog" aria-labelledby="updateUserLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="updateUserLabel">Update users information</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <input type="text" id="firstName" className="form-control" name="firstName" placeholder="Firstname" onChange={this.handleChange} />
                                    <input type="text" id="lastName" className="form-control" name="lastName" placeholder="Lastname" onChange={this.handleChange} />
                                    <input type="text" id="userName" className="form-control" name="userName" placeholder="Username" onChange={this.handleChange} />
                                    <input type="text" id="password" className="form-control" placeholder="Password" onChange={this.handleChange}></input>
                                    <div className="form-group">
                                        <select id="userState" className="form-control" onChange={this.handleChange}>
                                            <option value="ACTIVE">ACTIVE</option>
                                            <option value="INACTIVE">INACTIVE</option>
                                        </select>
                                    </div>
                                    <br />
                                    <button type="button" className="btn btn-primary" type="submit" value="Submit">Update</button>
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
    }
}