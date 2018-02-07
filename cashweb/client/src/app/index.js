import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Nav from './Nav';



ReactDOM.render(<App />, document.getElementById('app_shell'));


 ReactDOM.createPortal(<Nav />, document.getElementById('top-right-menu'));
