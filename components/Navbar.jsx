import React from 'react';

const Navbar = React.createClass({
  render() {
    return (
      <div className='navbar'>
        <a href='pages/about.html'>About</a>
        <a href='pages/other-stuff.html'>Other Stuff</a>
        <a href='pages/contact.html'>Contact</a>
      </div>
    );
  },
});

export default Navbar;
