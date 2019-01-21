import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import Home from './Home';
import About from './About';
import Contact from './Contact'

class Url extends React.Component {
    render() {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Home} />
      <Route path='/Home' component={Home} />
      <Route path='/About' component={About} />
      <Route path='/Contact' component={Contact} />
    </Router>
  );
  }
}
export default Url;
