import React from 'react'
import IssueItemUpdate from '../../common/components/MainContainer/components/UserList/components/UserItem/components/IssueList/components/IssueItemUpdate'

const IssueUpdate = ({ match }) => (
  <div>
    <h1> Issue Update</h1>
    <div className='issue-update'>
      <IssueItemUpdate id={match.params.id} />
    </div>
  </div>
)

export default IssueUpdate
