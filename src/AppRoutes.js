import Home from './Pages/Home.js';
import Projects from './Pages/Projects.js';

const AppRoutes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/projects', component: <Projects /> }
];

export default AppRoutes;