import React from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <main>
      <Header />
      <Content/>
      <Footer/>
    </main>
  );
}

export default App;
