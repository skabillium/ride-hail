import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Survey from './pages/Survey';
import './App.css';

const Routes = () => {
  // Register the pages of the app
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
