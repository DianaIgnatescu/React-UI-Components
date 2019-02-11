import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { far } from '@fortawesome/free-regular-svg-icons';
import {
  faComment, faHeart, faEnvelope, faRetweet,
} from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';

// library.add(far, faHeart, faComment, faEnvelope);

const increment = props => props.commentCounts + 1;

const Footer = props => (
  <div className="footer">
    <FontAwesomeIcon className="comment" icon={faComment} onClick={increment} />
    {props.commentCount}
    <FontAwesomeIcon className="retweet" icon={faRetweet} />
    {props.retweetCount}
    <FontAwesomeIcon className="heart" icon={faHeart} />
    {props.likeCount}
    <FontAwesomeIcon className="envelope" icon={faEnvelope} />
  </div>
);

export default Footer;
