import React from 'react';
import './Amount.scss';
import PropTypes from 'prop-types';
import amountBG from '../../assets/amount-border.svg';
import amountCurrentBG from '../../assets/amount-border-current.svg';

const Amount = ({ text, current, previous }) => {
  const currentAmountStyle = {
    backgroundImage: `url(${amountCurrentBG})`,
    color: '#FF8B37',
  };
  const futureAmountStyle = {
    backgroundImage: `url(${amountBG})`,
    color: '#000',
  };
  const prevAmountStyle = {
    backgroundImage: `url(${amountBG})`,
    color: '#D0D0D8',
  };

  return (
      // eslint-disable-next-line no-nested-ternary
      <div className={`amount ${current ? 'current' : null}`} style={current ? currentAmountStyle : previous ? prevAmountStyle : futureAmountStyle }>
            <span className='amount__text'>{text}</span>
        </div>
  );
};

Amount.propTypes = {
  text: PropTypes.string,
  current: PropTypes.bool,
  previous: PropTypes.bool,
};
export default Amount;
