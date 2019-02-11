import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { far } from '@fortawesome/free-regular-svg-icons';
import {
  faComment, faHeart, faEnvelope, faSyncAlt,
} from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';

// library.add(far, faHeart, faComment, faEnvelope);

const Footer = props => (
  <div className="footer">
    <FontAwesomeIcon className="comment" icon={faComment} />
    {props.commentCount}
    <FontAwesomeIcon className="retweet" icon={faSyncAlt} />
    {props.retweetCount}
    <FontAwesomeIcon className="heart" icon={faHeart} />
    {props.likeCount}
    <FontAwesomeIcon className="envelope" icon={faEnvelope} />
  </div>
);

export default Footer;
