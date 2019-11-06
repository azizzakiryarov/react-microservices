import React from 'react'
import InLoggedNavbar from '../../common/components/MainContainer/components/InLoggedNavbar/InLoggedNavbar'
import AddUserToList from '../../common/components/MainContainer/components/UserList/components/AddUserToList/AddUserToList'
import UserList from '../../common/components/MainContainer/components/UserList/UserList'
import TeamItem from '../../common/components/MainContainer/components/TeamList/components/TeamItem/TeamItem'

const TeamDetails = ({ match }) => (
  <div>
    <div className='user-details'>
      <InLoggedNavbar id={match.params.id} />
      <h1 className='title-user-details'> Team Details</h1>
      <TeamItem id={match.params.id} />
      <AddUserToList id={match.params.id} />
      <UserList id={match.params.id} />
    </div>
  </div>
)

export default TeamDetails
