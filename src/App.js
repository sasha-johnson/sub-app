import React from 'react';
import './App.css';
import Header from './Header'; // Import Header component
import Nav from './Nav';       // Import Nav component
import Main from './Main';     // Import Main component
import Footer from './Footer'; // Import Footer component

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
