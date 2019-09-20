import React from 'react';
import axios from 'axios';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            user: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({
            userName: event.target.value,
            password: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            userName: document.getElementById("userName").value,
            password: document.getElementById("password").value,
        };

        axios.get('http://localhost:8081/users/login/?userName=' + user.userName + '&password=' + user.password).then((res) => {
                console.log(res);
                window.location.replace('http://localhost:3000/users/get/' + res.data.id);
            }).catch(err => {
                alert(err);
            });
    }

    render() {
        return (
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" id="userName" className="fadeIn second" placeholder="Username" onChange={this.handleChange} />
                            <input type="text" id="password" className="fadeIn second" placeholder="Password" onChange={this.handleChange}></input>
                            <input type="submit" className="fadeIn fourth" value="Log In"></input>
                        </form>
                        <div id="formFooter">
                            <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>
                    </div>
                </div>
                                
        )
    }
}