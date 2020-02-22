import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class IssueItemUpdate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: '',
            issueState: '',
            userId: '',
            users:[]

		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount () {
        axios.get('http://localhost:8869/issues/getUsedId/' + this.props.id).then(res => {this.setState({ userId: res.data });})
        axios.get('http://localhost:8081/users/getAll').then(res => {this.setState({ users: res.data });});
    }

	handleChange = event => {
		this.setState({
			comment: event.target.value,
			issueState: event.target.value,
		});
	};

    handleSubmit = issueId => {
		const comment = document.getElementById('comment').value
		const issueState =  document.getElementById('issueState').value
        const userId = this.state.userId;
        const assighTo = document.getElementById('assighTo').value
		axios.put('http://localhost:8869/issues/update/' + issueId + '?comment=' + comment + '&issueState=' + issueState + '&userId=' + userId).then(() => {
            axios.put('http://localhost:8869/issues/assignIssueTo/' + issueId + '?userId=' + assighTo).then(() => {
                window.location.replace('http://localhost:3000/users/get/' + userId);
            }).catch(error => {alert(error.response.data);});
        }).catch(error => {alert(error.response.data);});
	};

	render() {
		return (
            <div className='updateIssueForUser'>
                <div>
                    <div>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateIssueForUser"><i class="far fa-edit"></i></button>
                    </div>
                    <div className="modal fade" id="updateIssueForUser" tabIndex="-1" role="dialog" aria-labelledby="updateIssueForUserLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="addIssueToUserLabel">Update issue information</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div>
                                        <form onSubmit={this.handleSubmit.bind(this, this.props.id)}>
                                            <input type="text" id="comment" className="form-control" placeholder="Comment" onChange={this.handleChange} />
                                            <div className="form-group">
                                              <select id="issueState" className="form-control" placeholder={this.state.issueState} onChange={this.handleChange}>
                                                  <option value="INWORK">In Work</option>
                                                  <option value="PAUSED">Paused</option>
                                                  <option value="REOPENED">Reopened</option>
                                                  <option value="SOLVED">Solved</option>
                                                  <option value="CLOSED">Closed</option>
                                              </select>
                                           </div>
                                           <div className="form-group">
                                              <select id="assighTo" className="form-control" placeholder="Users" onChange={this.handleChange}>
                                              {this.state.users.map(user =><option  key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>)}
                                              </select>
                                           </div>
                                           <br />
                                          <button type="button" className="btn btn-primary" type="submit" value="Submit">Update</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}
