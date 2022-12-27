import React from 'react';

import earthIcon from '../../../public/icons/earth-icon.png';

export default function Header() {
  return (
    <header className="header">
      <img 
        src={earthIcon} 
        alt="earth-icon" 
        className="earth-icon" 
      />

      <h1 id="title">Travel Journal</h1>
    </header>
  );
}