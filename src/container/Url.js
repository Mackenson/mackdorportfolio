import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import Home from './Home';
import About from './About'

class Url extends React.Component {
    render() {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
    </Router>
  );
  }
}
export default Url;
