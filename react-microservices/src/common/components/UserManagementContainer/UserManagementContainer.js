import {connect } from 'react-redux';
import UserManagementContainerWrapper from './UserManagementContainerWrapper';
import { addUsers } from '../../../reduxStore/config/users';

const mapStateToProps = state => ({
    users: state.users,
});

const mapDispatchToProps = dispatch => ({
    handleAddUser: (firstName, lastName, userName, password) => {
        dispatch(addUsers(firstName, lastName, userName, password))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserManagementContainerWrapper);