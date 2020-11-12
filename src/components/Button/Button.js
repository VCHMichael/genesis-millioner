import React from 'react';
import './Button.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ link, text }) => (
        <NavLink to={link} className='btn'>{text}</NavLink>
);
Button.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
};
export default Button;
