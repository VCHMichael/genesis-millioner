import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import handSVG from '../../assets/hand.svg';
import Button from '../../components/Button/Button';
import './GameEnd.scss';

const GameEnd = ({ location: { state } }) => (
        <main className='main'>
            <div className='wrapper'>
                <div className="container">
                    <div className="container__logo">
                        <img src={handSVG} alt="Hand logo"/>
                    </div>
                    <div className="container__startGame">
                        <h4 className='container__startGame__score'>Total score:</h4>
                        <h1 className='title'>{ state.result } earned</h1>
                        <Button link={`${process.env.PUBLIC_URL}/`} text='Try again'/>
                    </div>
                </div>
            </div>
        </main>
);

GameEnd.propTypes = {
  location: PropTypes.object,
};
export default withRouter(GameEnd);
