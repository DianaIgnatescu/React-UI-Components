/* eslint-disable react/prop-types */
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { far } from '@fortawesome/free-regular-svg-icons';
import {
  faComment, faHeart, faEnvelope, faSyncAlt,
} from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';

// library.add(far, faHeart, faComment, faEnvelope);

const Footer = ({ commentCount, retweetCount, likeCount }) => (
  <div className="footer">
    <FontAwesomeIcon className="comment" icon={faComment} />
    {commentCount}
    <FontAwesomeIcon className="retweet" icon={faSyncAlt} />
    {retweetCount}
    <FontAwesomeIcon className="heart" icon={faHeart} />
    {likeCount}
    <FontAwesomeIcon className="envelope" icon={faEnvelope} />
  </div>
);

export default Footer;
