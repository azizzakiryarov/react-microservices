import React from 'react';
import UserManagementContainer from '../../common/components/UserManagementContainer/UserManagementContainer';

const Home = () => (
    <div>
        <h1> Welcome to User Service </h1>
        <div className="Home">
            <UserManagementContainer />
        </div>
    </div>
);

export default Home;