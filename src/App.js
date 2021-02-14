import React from 'react';
import GlobalStyle from './global';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import Main from './pages/Main';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/create" component={CreateUser}/>
          <PrivateRoute path="/main" component={Main} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
