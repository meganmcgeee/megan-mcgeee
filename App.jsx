import React from 'react';
import About from './components/About';
import Logo from './components/Logo';
import Navbar from './components/Navbar';

const App = React.createClass({
  render() {
    return (
      <div className='app'>
        <Navbar />
        <About />
        <Logo />
      </div>
    );
  },
});

export default App;
