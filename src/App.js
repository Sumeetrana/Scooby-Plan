import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetail from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/Signup'
import CreateProject from './components/projects/CreateProject'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetail} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
