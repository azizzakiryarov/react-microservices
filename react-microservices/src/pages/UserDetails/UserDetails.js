import React from 'react'
import InLoggedNavbar from '../../common/components/MainContainer/components/InLoggedNavbar/InLoggedNavbar'
import UserItem from '../../common/components/MainContainer/components/UserList/components/UserItem/UserItem'
import UserItemUpdate from '../../common/components/MainContainer/components/UserList/components/UserItem/UserItemUpdate'
import AddIssueToUser from '../../common/components/MainContainer/components/UserList/components/UserItem/components/AddIssueToUser/AddIssueToUser'
import IssueList from '../../common/components/MainContainer/components/UserList/components/UserItem/components/IssueList/IssueList'

const UserDetails = ({ match }) => (
  <div>
    <div className='user-details'>
      <InLoggedNavbar id={match.params.id} />
      <h1 className='title-user-details'> User Details</h1>
      <UserItem id={match.params.id} />
      <UserItemUpdate id={match.params.id} />
      <AddIssueToUser id={match.params.id} />
      <IssueList id={match.params.id} />
    </div>
  </div>
)

export default UserDetails
