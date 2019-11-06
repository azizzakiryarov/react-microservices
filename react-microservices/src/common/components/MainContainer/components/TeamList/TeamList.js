import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class TeamList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8082/teams/getAll', { useCredentails: true }).then(res => {
            this.setState({ teams: res.data });
        });
    }

    handleDelete = (teamId) => {
        axios.delete('http://localhost:8082/teams/delete/' + teamId)
            .then(() => {
                window.location.reload();
            }).catch((error) => {
                alert(error.response.data);
            });
    }

    render() {
        return <ul className="list-group user-list">
            {this.state.teams.map(team =>
                <li className="list-group-item list-group-item-action" key={team.id}>
                    <NavLink to={`/teams/get/${team.id}`}>{team.teamName} {team.teamDescription} {team.teamState}</NavLink>
                    {/* <NavLink to={`/teams/update/${team.id}`}><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#updatTeam"><i class="fas fa-users-cog"></i></button></NavLink> */}
                    <button type="button" className="btn btn-danger" onClick={this.handleDelete.bind(this, team.id)}><i class="fas fa-minus-circle"></i></button>
                </li>)}
        </ul>
    }
}