/* eslint-disable react/prop-types */
import React from 'react';
import './Card.css';

const CardContent = ({
  header, body, link, linkText,
}) => (
  <div className="card-content">
    <h4 className="card-content-header">{header}</h4>
    <p className="card-content-body">{body}</p>
    <a className="card-content-link" href={link}>{linkText}</a>
  </div>
);

export default CardContent;
