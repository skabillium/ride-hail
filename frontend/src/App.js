import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import './App.css';

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
