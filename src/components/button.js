import React from 'react';
import { Link } from "gatsby";

const Button = ({ children, className, url }) => (
  <Link to={url} className={`${className}`}>
      {children}
  </Link>
);

export default Button;
