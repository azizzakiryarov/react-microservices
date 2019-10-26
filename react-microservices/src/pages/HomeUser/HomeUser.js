import React from 'react'
import InLoggedNavbar from '../../common/components/MainContainer/components/InLoggedNavbar/InLoggedNavbar'

const HomeUser = ({ match }) => (
  <div>
    <div className='HomeUser'>
      <InLoggedNavbar id={match.params.id} />
      <h1 className='greeting-home'> Welcome to User Page </h1>
    </div>
  </div>
)

export default HomeUser
