import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const clickHandler = () => {
  window.open('https://www.reactjs.org');
};

const CardContainer = () => (
  <div className="card-container" onClick={clickHandler}>
    <CardBanner />
    <CardContent
      header="Getting started with React"
      body="React makes it painless to create interactive UIs. Design simple views for each state in your application."
      link="https://reactjs.org"
      linkText="reactjs.org"
    />
  </div>
);

export default CardContainer;
