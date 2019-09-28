import React from 'react'
import axios from 'axios'

export default class IssueList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      issues: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:8869/issues/getAllIssuesFor/' + this.props.id).then(res => {
      console.log(res)
      this.setState({ issues: res.data })
    })
  }

  handleDelete = (issueId) => {
        axios.delete('http://localhost:8869/issues/delete/' + issueId + '?userId=' + this.props.id)
            .then(() => {
                window.location.reload();
            }).catch(err => {
                alert(err);
            });
    }

  render () {
    return <ul className='list-group userList'>
      {this.state.issues.map(issue =>
        <li className='list-group-item list-group-item-action' key={issue.id}>{issue.comment}<div className='issueState'>{issue.issueState}</div>

          {/*<NavLink to={`/users/get/${user.id}`}>{user.comment}{user.issueState}</NavLink>
                <NavLink to={`/users/update/${user.id}`}><button type='button' className='btn btn-primary' data-toggle='modal' data-target='#updateUser'>Update</button></NavLink>*/}
                <button type='button' className='btn btn-danger' onClick={this.handleDelete.bind(this, issue.id)}>x</button>
              </li>)}
           </ul>
  }
}