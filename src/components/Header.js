import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  const style = {
    display: 'inline-block',
    margin: 10,
    marginBottom: 30
  };

  return (
    <div>
      <div>
        <h3 style={style}><Link to='/'>Home</Link></h3>
        <h3 style={style}><Link to='/first'>First</Link></h3>
        <h3 style={style}><Link to='/second'>Second</Link></h3>
      </div>
      {children}
    </div>
  )
}

export default Header;
