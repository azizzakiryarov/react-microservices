import React from 'react'
import AddIssueToUser from '../../common/components/MainContainer/components/UserList/components/AddIssueToUser/AddIssueToUser'
import IssueList from '../../common/components/MainContainer/components/UserList/components/IssueList/IssueList'
import UserItem from '../../common/components/MainContainer/components/UserList/components/UserItem'

const UserDetails = ({ match }) => (
  <div>
    <h1 className='title-user-details'> User Details</h1>
    <div className='user-details'>
      <UserItem id={match.params.id} />
      <AddIssueToUser id={match.params.id} />
      <IssueList id={match.params.id} />
    </div>
  </div>
)

export default UserDetails
