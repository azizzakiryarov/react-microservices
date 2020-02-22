import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			issues: [],
		};
		this.handleDelete = this.handleDelete.bind(this);
	}

	componentDidMount() {
		axios.get('http://localhost:8869/issues/getIssues').then(res => {
			this.setState({ issues: res.data });
		});
	}

	onDragStart = (event, id) => {
		event.dataTransfer.setData('id', id);
	};

	onDragOver = event => {
		event.preventDefault();
	};

	onDrop = (event, state) => {
		let id = event.dataTransfer.getData('id');

		let issues = this.state.issues.filter(issue => {
			if (issue.id == id) {
				issue.issueState = state;
				axios.put('http://localhost:8869/issues/updateState/' + issue.id + '?issueState=' + issue.issueState).then(() => {}).catch(error => {alert(error.response.data);});
			}
			return issue;
		});

		this.setState({...this.state,issues,});
	};

	handleDelete = issueId => {
		axios
			.delete('http://localhost:8869/issues/delete/' + issueId + '?userId=' + this.props.id)
			.then(() => {
				window.location.reload();
			})
			.catch(error => {
				alert(error.response.data);
			});
	};

	render() {
		var issues = {
			inwork: [],
			paused: [],
			reopened: [],
			solved: [],
			closed: []
		};

		this.state.issues.forEach(issue => {
			var states = ['INWORK', 'PAUSED', 'REOPENED', 'SOLVED', 'CLOSED'];
			if (issue.issueState.match(states[0])) {
				issues.inwork.push(
					<div
						key={issue.id}
						onDragStart={e => this.onDragStart(e, issue.id)}
						draggable
						className="draggable"
					>
						{issue.comment}
						<br/>
						<div className="issue-userName">{issue.user.firstName} {issue.user.lastName}</div>
						<NavLink to={`/issues/update/${issue.id}`}>
							<button
								type="button"
								className="btn btn-primary"
								data-toggle="modal"
								data-target="#updateIssue"
							>
								<i class="far fa-edit"></i>
							</button>
						</NavLink>
						<button
							type="button"
							className="btn btn-danger"
							onClick={this.handleDelete.bind(this, issue.id)}
						>
							x
						</button>
					</div>
				);
			}
			if (issue.issueState.match(states[1])) {
				issues.paused.push(
					<div
						key={issue.id}
						onDragStart={e => this.onDragStart(e, issue.id)}
						draggable
						className="draggable"
					>
						{issue.comment}
						<div className="issue-userName">{issue.user.firstName} {issue.user.lastName}</div>
						<NavLink to={`/issues/update/${issue.id}`}>
							<button
								type="button"
								className="btn btn-primary"
								data-toggle="modal"
								data-target="#updateIssue"
							>
								<i class="far fa-edit"></i>
							</button>
						</NavLink>
						<button
							type="button"
							className="btn btn-danger"
							onClick={this.handleDelete.bind(this, issue.id)}
						>
							x
						</button>
					</div>
				);
			}
			if (issue.issueState.match(states[2])) {
				issues.reopened.push(
					<div
						key={issue.id}
						onDragStart={e => this.onDragStart(e, issue.id)}
						draggable
						className="draggable"
					>
						{issue.comment}
						<div className="issue-userName">{issue.user.firstName} {issue.user.lastName}</div>
						<NavLink to={`/issues/update/${issue.id}`}>
							<button
								type="button"
								className="btn btn-primary"
								data-toggle="modal"
								data-target="#updateIssue"
							>
								<i class="far fa-edit"></i>
							</button>
						</NavLink>
						<button
							type="button"
							className="btn btn-danger"
							onClick={this.handleDelete.bind(this, issue.id)}
						>
							x
						</button>
					</div>
				);
			}
			if (issue.issueState.match(states[3])) {
				issues.solved.push(
					<div
						key={issue.id}
						onDragStart={e => this.onDragStart(e, issue.id)}
						draggable
						className="draggable"
					>
						{issue.comment}
						<div className="issue-userName">{issue.user.firstName} {issue.user.lastName}</div>
						<NavLink to={`/issues/update/${issue.id}`}>
							<button
								type="button"
								className="btn btn-primary"
								data-toggle="modal"
								data-target="#updateIssue"
							>
								<i class="far fa-edit"></i>
							</button>
						</NavLink>
						<button
							type="button"
							className="btn btn-danger"
							onClick={this.handleDelete.bind(this, issue.id)}
						>
							x
						</button>
					</div>
				);
			}
			if (issue.issueState.match(states[4])) {
				issues.closed.push(
					<div
						key={issue.id}
						onDragStart={e => this.onDragStart(e, issue.id)}
						draggable
						className="draggable"
					>
						{issue.comment}
						<div className="issue-userName">{issue.user.firstName} {issue.user.lastName}</div>
						<NavLink to={`/issues/update/${issue.id}`}>
							<button
								type="button"
								className="btn btn-primary"
								data-toggle="modal"
								data-target="#updateIssue"
							>
								<i class="far fa-edit"></i>
							</button>
						</NavLink>
						<button
							type="button"
							className="btn btn-danger"
							onClick={this.handleDelete.bind(this, issue.id)}
						>
							x
						</button>
					</div>
				);
			}
		});

		return (
			<div className="container-drag">
				<div
					className="inwork"
					onDragOver={e => this.onDragOver(e)}
					onDrop={e => {
						this.onDrop(e, 'INWORK');
					}}
				>
					<span className="task-header">IN WORK</span>
					{issues.inwork}
				</div>
				<div
					className="paused"
					onDragOver={e => this.onDragOver(e)}
					onDrop={e => {
						this.onDrop(e, 'PAUSED');
					}}
				>
					<span className="task-header">PAUSED</span>
					{issues.paused}
				</div>
				<div
					className="reopened"
					onDragOver={e => this.onDragOver(e)}
					onDrop={e => {
						this.onDrop(e, 'REOPENED');
					}}
				>
					<span className="task-header">REOPENED</span>
					{issues.reopened}
				</div>
				<div className="solved" onDragOver={e => this.onDragOver(e)} onDrop={e => this.onDrop(e, 'SOLVED')}>
					<span className="task-header">SOLVED</span>
					{issues.solved}
				</div>
				<div className="closed" onDragOver={e => this.onDragOver(e)} onDrop={e => this.onDrop(e, 'CLOSED')}>
					<span className="task-header">CLOSED</span>
					{issues.closed}
				</div>
			</div>
		);
	}
}
