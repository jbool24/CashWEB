// REACT MODULES ==================================
import React from 'react';
import debug from 'debug';
import PropTypes from 'prop-types';
debug('app:errors');

// Import components ==============================

//=================================================

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
    // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        debug('helo');
        debug(error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.element.isRequired
};
