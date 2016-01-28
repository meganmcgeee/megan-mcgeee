import React from 'react';
import { render } from 'react-dom';

// First we import some components...
import { Router, Route, Link } from 'react-router';

// Then we delete a bunch of code from App and
// add some <Link> elements...
const App = React.createClass({
  render() {
    return (
      <div>

// Navbar
        <div className="navbar">
          <a href="pages/about.html">About</a>
          <a href="pages/other-stuff.html">Other Stuff</a>
          <a href="pages/contact.html">Contact</a>
        </div>
        {/* change the <a>s to <Link>s *//* change the <a>s to <Link>s */}/* change the <a>s to <Link>s */}/* change the <a>s to <Link>s */}

// Logo
        <div className="container" style="margin-left: 2%">
          <div className="row" style="margin: 2%">
           <div className="one-half column">
             <div className="one-third column .u-pull-left" style="margin-top: 15%">
                <img id="logo" src="img/meganpants.png"></img>
           </div>
         </div>
        </div>

        {/*
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        *//*
          next we replace `<Child>` with `this.props.children`
        */}/*
          next we replace `<Child>` with `this.props.children`
        */}/*
          next we replace `<Child>` with `this.props.children`
        */}
        {this.props.children}
      </div>
    );
  },
});

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <Router>
    <Route path='/' component={App}>
      <Route path='work' component={Work} />
      <Route path='other' component={Other} />
    </Route>
  </Router>
), document.body);
