import React from 'react'
import InLoggedNavbar from '../../common/components/MainContainer/components/InLoggedNavbar/InLoggedNavbar'
import AddTeam from '../../common/components/MainContainer/components/TeamList/components/AddTeam/AddTeam'
import TeamList from '../../common/components/MainContainer/components/TeamList/TeamList'
import TeamItem from '../../common/components/MainContainer/components/TeamList/components/TeamItem/TeamItem'

const AdminPage = ({ match }) => (
  <div>
    <div className='Home'>
      <InLoggedNavbar id={match.params.id} />
      <h1 className='greeting-home'> Welcome to Admin Page </h1>
      <TeamItem id={match.params.id} />
      <AddTeam />
      <TeamList />
    </div>
  </div>
)

export default AdminPage
