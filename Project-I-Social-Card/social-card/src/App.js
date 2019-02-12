import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => (
  <div className="app">
    <HeaderContainer />
    <CardContainer />
    <Footer likeCount={4} retweetCount={6} />
  </div>
);

export default App;
