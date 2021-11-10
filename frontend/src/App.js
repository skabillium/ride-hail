import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Survey from './pages/Survey';
import './App.css';

/**
 * TODO:
 * 1. Separate pages from components ✔️
 * 2. Style everything up. ✔️
 * 3. Store user info in local storage ✔️
 * 4. Remove unread notifications from app bar. ✔️
 */

const Routes = () => {
  const routes = useRoutes([
    { path: '/dashboard/:userId', element: <Dashboard /> },
    { path: '/survey/:rideId', element: <Survey /> },
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
