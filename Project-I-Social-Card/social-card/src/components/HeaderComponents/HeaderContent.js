import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

const HeaderContent = () => (
  <div className="header-content">
    <HeaderTitle />
    <p>
      Let&apos;s learn Rect by building simple interfaces with components. Don&apos;t try to
      overthink it, just keep it simple and have fun. Once you feel comfortable using components
      you are well on your way to mastering React!
    </p>
  </div>
);

export default HeaderContent;
