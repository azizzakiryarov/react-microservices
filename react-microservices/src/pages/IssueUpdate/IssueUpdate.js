import React from 'react'
import IssueItemUpdate from '../../common/components/MainContainer/components/UserList/components/UserItem/components/IssueList/components/IssueItemUpdate'
import InLoggedNavbar from '../../common/components/MainContainer/components/InLoggedNavbar/InLoggedNavbar'

const IssueUpdate = ({ match }) => (
  <div>
    <InLoggedNavbar id={match.params.id} />
    <h1 className='title-issue-update'> Issue Update</h1>
    <div className='issue-update'>
      <IssueItemUpdate id={match.params.id} />
    </div>
  </div>
)

export default IssueUpdate
