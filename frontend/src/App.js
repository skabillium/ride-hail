import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import './App.css';

/**
 * TODO:
 * 1. Separate pages from components
 * 2. Style everything up.
 * 3. Store user info in local storage
 */

const Routes = () => {
  const routes = useRoutes([
    { path: '/dashboard/:userId', element: <Dashboard /> },
    { path: '/', element: <Login /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
};

export default App;
