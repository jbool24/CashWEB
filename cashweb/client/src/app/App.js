// REACT MODULES ==================================
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import '../styles/semantic.less';

// Import components ==============================
import ErrorBoundary from './components/ErrorComponent';
import Nav from './components/NavBar/Nav';
import Sidebar from './components/Sidebar';
import ContentArea from './Content';

// import Table from './components/tables';
//=================================================

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='d-flex mt-2'>
                { ReactDOM.createPortal(<Nav />, document.getElementById('top-right-menu')) }
                <Sidebar />
                <ContentArea />
            </div>
        );
    }
}


const App = () => (
    <Router basename='/cash'>
        <ErrorBoundary>
            <Route path="/" component={AppComponent}></Route>
        </ErrorBoundary>
    </Router>
);

export default App;
