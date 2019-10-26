import React from 'react'
import axios from 'axios'

export default class InLoggedNavbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: ''
    }
  }

  componentDidMount () {
    axios.get('http://localhost:8081/users/get/' + this.props.id).then(res => {
      this.setState({ user: res.data })
    })
  }

  handleHome = () =>{
    window.location.replace('http://localhost:3000/home/' + this.props.id);
  }

  handleDashboard = () =>{
    window.location.replace('http://localhost:3000/dashboard/' + this.props.id);
  }

  handleLoggedOut = () =>{
    window.location.replace('http://localhost:3000/');
  }

  handleMoveToUserDetailsPage = () => {
    window.location.replace('http://localhost:3000/users/get/' + this.props.id);
  }

  render () {
    return (
      <div>
      <nav className='navbar navbar-expand-lg navbar navbar-dark bg-dark'>
          <a className='navbar-brand'>US</a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href="#" onClick={this.handleHome}>Home<span className='sr-only'>(current)</span></a>
              </li>
              <li className='nav-item active'>
                <a className='nav-link' href="#" onClick={this.handleDashboard}>Dashboard<span className='sr-only'>(current)</span></a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
	          <li>
              <a className='nav-link' href="#" onClick={this.handleMoveToUserDetailsPage}>{this.state.user.firstName} {this.state.user.lastName}</a>
	          </li>	          
            <li>
	          	<a className='nav-link' href="#" data-toggle="modal" data-target="#logoutModal">Logout</a>
	          </li>
          </ul>
          <div id="logoutModal" className="modal" tabindex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Logout</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h1 className="logout-message">Are you sure you want to log out?</h1>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Back</button>
                <button type="button" className="btn btn-primary" onClick={this.handleLoggedOut}>OK</button>
              </div>
            </div>
          </div>
         </div>
          </div>
        </nav>
      </div>
    )
  }
}
