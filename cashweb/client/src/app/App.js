// REACT MODULES ==================================
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import components ==============================
import ErrorBoundary from './components/ErrorComponent';
import Nav from './components/NavBar/Nav';
import Sidebar from './components/Sidebar';
import ContentComponent from './Content';
//=================================================


class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='d-flex mt-4'>
                { ReactDOM.createPortal(<Nav />, document.getElementById('top-right-menu')) }
                <ErrorBoundary>
                    <Sidebar />
                </ErrorBoundary>
                <ContentComponent />
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
