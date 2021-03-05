import Home from '@/views/home';
import About from '@/views/about';

const RouterConfig = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
];

export default RouterConfig;
