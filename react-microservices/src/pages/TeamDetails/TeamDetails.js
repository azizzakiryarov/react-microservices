import React from 'react'
import AddUserToList from '../../common/components/MainContainer/components/UserList/components/AddUserToList/AddUserToList'
import UserList from '../../common/components/MainContainer/components/UserList/UserList'
import TeamItem from '../../common/components/MainContainer/components/TeamList/components/TeamItem/TeamItem'
import InLoggedTeamNavbar from '../../common/components/MainContainer/components/InLoggedNavbar/InLoggedTeamNavbar'

const TeamDetails = ({ match }) => (
  <div>
    <div className='user-details'>
      <InLoggedTeamNavbar id={match.params.id} />
      <h1 className='title-user-details'> Team Details</h1>
      <TeamItem id={match.params.id} />
      <AddUserToList id={match.params.id} />
      <UserList id={match.params.id} />
    </div>
  </div>
)

export default TeamDetails
