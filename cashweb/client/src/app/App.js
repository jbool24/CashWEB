// REACT MODULES ==================================
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Import components ==============================

import Nav from './Nav';
//=================================================


class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='container'>
                { ReactDOM.createPortal(<Nav />, document.getElementById('top-right-menu')) }
                <h1>HEELO APP WORLD</h1>
            </div>
        );
    }
}


const App = () => (
    <Router>
        <Route path="/" component={AppComponent}></Route>
    </Router>
);

export default App;
