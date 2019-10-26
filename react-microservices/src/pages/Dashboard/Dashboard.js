import React from 'react'
import InLoggedNavbar from '../../common/components/MainContainer/components/InLoggedNavbar/InLoggedNavbar'
import Board from '../../common/components/MainContainer/components/Board/Board'

const Dashboard = ({ match }) => (
  <div>
    <div className='dashboard'>
      <InLoggedNavbar id={match.params.id} />
      <h1 className='greeting-home'> Welcome to dashboard </h1>
      <Board id={match.params.id} />
    </div>
  </div>
)
export default Dashboard
