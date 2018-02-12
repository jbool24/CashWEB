// REACT MODULES ==================================
import React from 'react';

// Import components ==============================
import EmailNav from './EmailNav';
import TaskNav from './TaskNav';
import AlertNav from './AlertNav';
import UserNav from './UserNav';

//=================================================

export default class Nav extends React.Component {
    render() {
        return (
            <ul className="nav">
                <EmailNav />
                <TaskNav />
                <AlertNav />
                <UserNav />
            </ul>
        );
    }
}
