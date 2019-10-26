import React from 'react'

export default class Navbar extends React.Component {

  handleOnClick = () =>{
    window.location.replace('http://localhost:3000/');
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
                <a className='nav-link' href="#" onClick={this.handleOnClick}>Home<span className='sr-only'>(current)</span></a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
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
                <button type="button" className="btn btn-primary" onClick={this.handleOnClick}>OK</button>
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
