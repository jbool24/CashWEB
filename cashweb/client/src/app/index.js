import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';


const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app_shell'),
    );
};

render(App);
if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./App', () => { render(App); });
}
