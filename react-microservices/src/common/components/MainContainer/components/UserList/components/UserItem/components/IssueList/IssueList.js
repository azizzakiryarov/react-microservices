import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class IssueList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			issues: []
		};
		this.handleDelete = this.handleDelete.bind(this);
	}

	componentDidMount() {
		axios.get('http://localhost:8869/issues/getAllIssuesFor/' + this.props.id).then(res => {
			this.setState({ issues: res.data });
		});
	}

	handleDelete = issueId => {
		axios.delete('http://localhost:8869/issues/delete/' + issueId + '?userId=' + this.props.id).then(() => {window.location.reload();}).catch(err => {alert(err);});
	};

	render() {
		return (
			<ul className="list-group issueList">
				{this.state.issues.map(issue => (
					<li className="list-group-item list-group-item-action" key={issue.id}>{issue.comment}<div className="issueState">{issue.issueState}</div>
                    <NavLink to={`/issues/update/${issue.id}`}><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateIssue"><i class="far fa-edit"></i></button></NavLink>
                    <button type="button" className="btn btn-danger" onClick={this.handleDelete.bind(this, issue.id)}>x</button>
					</li>
				))}
			</ul>
		);
	}
}
