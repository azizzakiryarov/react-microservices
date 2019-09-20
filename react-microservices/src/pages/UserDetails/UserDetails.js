import React from 'react'
import UserItem from '../../common/components/MainContainer/components/UserList/components/UserItem'

const UserDetails = ({ match }) => (
  <div>
    <h1> User Details</h1>
    <div className='user-details'>
      <UserItem id={match.params.id} />
    </div>
  </div>
)

export default UserDetails
