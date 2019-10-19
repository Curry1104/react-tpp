import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './routes/home/Home';
import User from './routes/user/User';
import Detail from './routes/detail/Detail';
import Seat from './routes/seat/Seat';

class App extends Component {

  render () {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" exact component={User} />
          <Route path="/detail" exact component={Detail} />
          <Route path="/seat" exact component={Seat} />
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    );
  }

}


export default App;
