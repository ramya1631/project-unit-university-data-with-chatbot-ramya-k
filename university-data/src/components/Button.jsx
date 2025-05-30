import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({ className, to, children }) {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default Button;