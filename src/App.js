import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Admin from './components/Admin';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Menu from './components/Menu';
const App = () => {
  return (
    <div className="container">
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
