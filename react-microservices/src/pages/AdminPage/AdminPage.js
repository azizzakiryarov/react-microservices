import React from 'react'
import UserList from '../../common/components/MainContainer/components/UserList/UserList'
import InLoggedNavbar from '../../common/components/MainContainer/components/InLoggedNavbar/InLoggedNavbar'
import UserItem from '../../common/components/MainContainer/components/UserList/components/UserItem/UserItem'
import AddUserToList from '../../common/components/MainContainer/components/UserList/components/AddUserToList/AddUserToList'

const AdminPage = ({ match }) => (
  <div>
    <div className='Home'>
      <InLoggedNavbar id={match.params.id} />
      <h1 className='greeting-home'> Welcome to Admin Page </h1>
      <UserItem id={match.params.id} />
      <AddUserToList />
      <UserList />
    </div>
  </div>
)

export default AdminPage
