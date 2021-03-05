import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import RouterConfig from '@/route';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';

const root = document.getElementById('root');

ReactDOM.render(<Router>{renderRoutes(RouterConfig)}</Router>, root);
