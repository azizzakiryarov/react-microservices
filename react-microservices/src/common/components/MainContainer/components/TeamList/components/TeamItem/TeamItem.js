import React from 'react'
import axios from 'axios'

export default class TeamItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      team: ''
    }
  }

  componentDidMount () {
    axios.get('http://localhost:8082/teams/get/' + this.props.id).then(res => {
      this.setState({ team: res.data })
    })
  }

  render () {
    return (
      <div className='teamDetails'>
        <div>{this.state.team.teamName}</div>
        <div>{this.state.team.teamDescription}</div>
        <div className='teamState'>{this.state.team.teamState}</div>
      </div>
    )
  }
}
