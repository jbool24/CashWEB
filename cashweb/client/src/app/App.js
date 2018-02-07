// REACT MODULES ==================================
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import components ==============================


//=================================================


class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className='container'>
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
