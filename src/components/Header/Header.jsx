import React from 'react';
import Carusel from '../Carusel/Carusel';
import Navbar from '../Navbar/Navbar';

function Header() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }}>
        <Navbar />
      </div>
      <Carusel />
    </div>
  );
}

export default Header;
