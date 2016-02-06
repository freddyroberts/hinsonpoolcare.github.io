import React, { PropTypes } from 'react'
import {render} from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import Header from './header.js';
import Home from './homepage.js';
import Contact from './contact.js';
import About from './about.js';
import Estimates from './estimates.js';
import Footer from './footer.js';

class App extends React.Component {
  render () {
    return (
      <div className='wrapper' >
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}


const routes = (
  <Router>
    <Route path="/" component={App}>
      <Route path='home' component={Home} />
      <Route path='estimates' component={Estimates}/>
      <Route path="about" component={About} />
      <Route path='contact' component={Contact} />
    </Route>
  </Router>
);


render(routes, document.getElementById('app'));
