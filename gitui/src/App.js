import React, { Component, Fragment } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route} from 'react-router-dom';
import GitRepositories from './pages/gitRepositories';
import SignUp from './pages/signup';
var hist = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={hist}>
                    <Fragment>
                      <Route exact path='/gitRepositories' component={GitRepositories} />
                      <Route exact path='/sign-up' component={SignUp} />
                    </Fragment>
                </Router>
            </div>
        );
    }
}

export default App;