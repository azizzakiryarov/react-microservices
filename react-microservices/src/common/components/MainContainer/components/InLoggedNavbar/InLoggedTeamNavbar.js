import React from 'react'
import axios from 'axios'

export default class InLoggedTeamNavbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      teamId: ''
    }
  }

  componentDidMount () {
    if (this.props.id !== undefined) {
      axios.get('http://localhost:8081/users/get/' + this.props.id).then(res => {
        this.setState({ user: res.data })
      })
    }
  };

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
              <li className='nav-item active' />
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              <li />
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
