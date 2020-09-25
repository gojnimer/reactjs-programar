import React from 'react';
import Home from './pages/home'
import './App.css';
import Routes from './constants/routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={Routes.HOME} component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
