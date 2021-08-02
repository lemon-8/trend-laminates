import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Content from './Content';
import Hero from './Hero';
import Cursor from './Cursor';

const App = () => {
  return (
    <div>
      <Cursor />
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

export default App;