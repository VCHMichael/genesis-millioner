import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './MenuMobile.scss';
import PropTypes from 'prop-types';
import Amount from '../Amount/Amount';

const MenuMobile = ({ data, currentQuestion }) => (
        <Menu right width={'100%'}>
            <div className='menuContainer'>
                {data && data.map((e) => (<Amount
                        key={e.id}
                        text={e.amount}
                        current={e.id === currentQuestion + 1}
                        previous={e.id <= currentQuestion} />))}
            </div>
        </Menu>
);

MenuMobile.propTypes = {
  data: PropTypes.array,
  currentQuestion: PropTypes.number,
};

export default MenuMobile;
