import React, { Component } from 'react';
import './App.css';

import Competitions from './Competitions';
import NewCompetition from './NewCompetition';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Verseel</h1>
          <a href='/new-competition' className="App-title"><h2>+</h2></a>
        </header>
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/home"/>
                )}/>
                 <Route exact path='/home' component={Competitions} />
                 <Route exact path='/new-competition' component={NewCompetition} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;