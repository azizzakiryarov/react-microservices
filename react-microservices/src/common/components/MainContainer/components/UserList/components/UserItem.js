import React from 'react'
import axios from 'axios'

export default class UserItem extends React.Component {
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

  render () {
    return (
      <div className='userDetails'>{this.state.user.firstName}{this.state.user.lastName}<div className='userState'>{this.state.user.userState}</div>
      </div>
    )
  }
}
