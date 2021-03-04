import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import ReactDOM from 'react-dom';
// import App from './App';
import Demo from './demo';
import About from './About';
import './index.css';

const RouterConfig = [
  {
    path: '/demo',
    component: Demo,
    childRoutes: [{ path: 'about', component: About }],
  },
];

ReactDOM.render(<Router>{renderRoutes(RouterConfig)}</Router>, document.getElementById('root'));
