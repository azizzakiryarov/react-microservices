import React from 'react'
import UserItemUpdate from '../../common/components/MainContainer/components/UserList/components/UserItem/UserItemUpdate'

const UserUpdate = ({ match }) => (
  <div>
    <h1> User Update</h1>
    <div className='user-update'>
      <UserItemUpdate id={match.params.id} />
    </div>
  </div>
)

export default UserUpdate
