import React, { Component, Fragment } from "react";
// import { Apicaller } from "./util/apicaller";
// import "./App.css";
// import config from "./config/config";
// import { set } from "lodash";
import { Router, Route} from 'react-router-dom';
import SignUp from './pages/signup';
import GitRepository from './pages/gitRepositories';
import { createBrowserHistory } from 'history';

var hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router history={hist}>
             <Fragment>
              <Route exact path="/gitRespositories" component={GitRepository} />
              <Route exact path="/signup" component={SignUp} />
             </Fragment> 
          </Router>
      </div>
    );
  }
}

export default App;
