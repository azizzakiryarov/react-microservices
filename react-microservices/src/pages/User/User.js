import React from 'react';
import userProps from './User.props';
//import IssueContainer from '../../common/components/UserManagementContainer/components/UserList/components/UserContent/components/IssueContainer/IssueContainer';

const User = props => (
  <div>
    <div className="user">
      <h1> User </h1>
      <IssueContainer userId={props.match.params.id} />
    </div>
  </div>
);

User.propTypes = userProps;
export default User;