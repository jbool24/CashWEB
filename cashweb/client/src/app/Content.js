// REACT MODULES ==================================
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Import components ==============================


//=================================================

export default class ContentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <main className="px-5">
                <h1>HEELO APP WORLD</h1>
            </main>
        );
    }
}
