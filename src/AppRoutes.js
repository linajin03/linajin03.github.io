import Home from './Pages/Home.js';
import Projects from './Pages/Projects.js';
import Archives from './Pages/Archives.js';

const AppRoutes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/projects', component: <Projects /> },
  { path: '/archives', component: <Archives /> },
];

export default AppRoutes;