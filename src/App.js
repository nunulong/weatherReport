import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink as Link
} from 'react-router-dom';
import ZipCode from './components/ZipCode';
import Forecast from './components/Forecast';
import Detail from './components/Detail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container" id="app">
          <Route
            render={props => {
              return (
                <div className="navbar">
                  <h1>
                    <Link exact to="/">
                      Weather Report
                    </Link>
                  </h1>
                  <ZipCode
                    direction="row"
                    onSubmitZipCode={city => {
                      props.history.push({
                        pathname: '/forecast',
                        search: `?city=${city}`
                      });
                    }}
                  />
                </div>
              );
            }}
          />

          <Route
            exact
            path="/"
            render={props => {
              return (
                <div className="home-container">
                  <h1 className="title">Please Enter City and State</h1>
                  <ZipCode
                    direction="column"
                    onSubmitZipCode={city => {
                      props.history.push({
                        pathname: '/forecast',
                        search: `?city=${city}`
                      });
                    }}
                  />
                </div>
              );
            }}
          />

          <Route path="/forecast" component={Forecast} />
          <Route path="/details/:city" component={Detail} />
        </div>
      </Router>
    );
  }
}

export default App;
