import React from 'react';
import axios from 'axios';

export default class RegisterUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            password: '', 
            userRole: '',
            roleDescription: '',
            teams: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8082/teams/getAll', { useCredentails: true }).then(res => {
            this.setState({ teams: res.data });
        });
    }

    handleChange = event => {
        this.setState({
            firstName: event.target.value,
            lastName: event.target.value,
            userName: event.target.value,
            password: event.target.value,
            userRole: event.target.value,
            roleDescription: event.target.value,
            teamId: event.target.value
        });
    }

    handleSubmit = event => {

        event.preventDefault();

        const user = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            userName: document.getElementById("userName").value,
            password: document.getElementById("password").value,
            userRole: document.getElementById("userRole").value,
            roleDescription: document.getElementById("roleDescription").value,
            teamId: document.getElementById("teamId").value
        };

        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }

        axios.post('http://localhost:8081/users/add/?firstName=' + user.firstName +
            '&lastName=' + user.lastName +
            '&userName=' + user.userName +
            '&password=' + user.password + 
            '&userRole=' + user.userRole + 
            '&roleDescription=' + user.roleDescription + 
            '&teamId=' + user.teamId, 
            { config }).then((user) => {
                window.location.replace('http://localhost:3000/users/get/' + user.data);
            }).catch(error => {
                alert(error.response.data);
            });
    }

    render() {
        return (
            <div className='addUserToList'>
                <div>
                    <div>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addUserToList"><i class="fas fa-user-plus"></i> User</button>
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
                                            <input type="text" id="lastName" className="form-control" placeholder="Lastname" onChange={this.handleChange} />
                                            <input type="text" id="userName" className="form-control" placeholder="Username" onChange={this.handleChange} />
                                            <input type="text" className="form-control" id="password" placeholder="Password" onChange={this.handleChange}></input>
                                            <div className="form-group">
                                                <select id="userRole" className="form-control" onChange={this.handleChange}>
                                                    <option value="ADMIN">ADMIN</option>
                                                    <option value="USER">USER</option>
                                                    <option value="DEVELOPER">DEVELOPER</option>
                                                    <option value="SCRUMMASTER">SCRUM MASTER</option>
                                                    <option value="TEAMMANAGER">TEAM MANAGER</option>
                                                </select>
                                            </div>
                                            <input type="textarea" id="roleDescription" className="form-control" placeholder="Role description" onChange={this.handleChange} />
                                            <br/>
                                            <div className="form-group">
                                                <select id="teamId" className="form-control" onChange={this.handleChange}>
                                                {this.state.teams.map(team =>
                                                    <option  key={team.id} value={team.id}>{team.teamName} {team.teamDescription} {team.teamState}</option>
                                                )};
                                                </select>
                                            </div>
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