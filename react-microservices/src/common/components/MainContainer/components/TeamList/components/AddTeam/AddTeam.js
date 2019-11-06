import React from 'react';
import axios from 'axios';

export default class AddTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamName: '',
            teamDescription: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({
            teamName: event.target.value,
            teamDescription: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const team = {
            teamName: document.getElementById("teamName").value,
            teamDescription: document.getElementById("teamDescription").value
        };

        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }

        axios.post('http://localhost:8082/teams/add/?teamName=' + team.teamName + '&teamDescription=' + team.teamDescription, { config }
            ).then(() => {
                window.location.reload();
            }).catch(err => {
                alert(err);
            });
    }

    render() {
        return (
            <div className='addTeam'>
                <div>
                    <div>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addTeam"><i class="fas fa-users"></i> Team</button>
                    </div>
                    <div className="modal fade" id="addTeam" tabIndex="-1" role="dialog" aria-labelledby="addTeamLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="addTeamLabel">Fyll teams information</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div>
                                        <form onSubmit={this.handleSubmit}>
                                            <input type="text" id="teamName" className="form-control" placeholder="Name" onChange={this.handleChange} />
                                            <input type="text" id="teamDescription" className="form-control" placeholder="Description" onChange={this.handleChange} />
                                            <button type="button" className="btn btn-primary" type="submit" value="Submit">Create</button>
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