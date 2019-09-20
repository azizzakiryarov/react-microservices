import React from 'react'
import UserList from '../../common/components/MainContainer/components/UserList/UserList'
import AddUserToList from '../../common/components/MainContainer/components/AddUserToList/AddUserToList'

const Home = () => (
  <div>
    <h1 className='greeting-home'> Welcome to User Service </h1>
    <div className='Home'>
      <AddUserToList />
      <UserList />
    </div>
  </div>
)

export default Home
