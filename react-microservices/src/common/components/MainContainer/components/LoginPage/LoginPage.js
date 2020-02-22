import React from 'react';
import axios from 'axios';

export default class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			password: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleClick = () => {
		window.location.replace('http://localhost:3000/register');
	}

	handleChange = event => {
		this.setState({
			userName: event.target.value,
			password: event.target.value,
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		const user = {
			userName: document.getElementById('userName').value,
			password: document.getElementById('password').value,
		};

		if (user.userName !== undefined && user.password !== undefined) {
				axios
					.get('http://localhost:8081/users/login/?userName=' + user.userName + '&password=' + user.password)
					.then(res => {
						if (res.data.id !== undefined) {
							window.location.replace('http://localhost:3000/users/get/' + res.data.id);
						} else {
							alert('Wrong username or password...');
						}
					})
					.catch(error => {
						alert(error.response.data);
					});
		}
	};

	render() {
		return (
			<div>
				<div className="wrapper fadeInDown">
					<div id="formContent">
						<form onSubmit={this.handleSubmit}>
							<input
								type="text"
								id="userName"
								className="fadeIn second"
								placeholder="Username"
								onChange={this.handleChange}
							/>
							<input
								type="text"
								id="password"
								className="fadeIn second"
								placeholder="Password"
								onChange={this.handleChange}
							></input>
							<input type="submit" className="fadeIn fourth" value="Log In"></input>
						</form>
						<div id="formFooter">
							<a className="underlineHover" onClick={this.handleClick}>
								Would you like to register?
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
