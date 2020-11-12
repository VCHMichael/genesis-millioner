import React from 'react';
import './GameStart.scss';
import handSVG from '../../assets/hand.svg';
import Button from '../../components/Button/Button';

const GameStart = () => (
        <main className='main-container'>
            <div className='wrapper'>
                <div className="container">
                    <div className="container__logo">
                        <img src={handSVG} alt="Hand logo"/>
                    </div>
                    <div className="container__startGame">
                        <h1 className='title'>Who wants to be a millionaire?</h1>
                        <Button link={`${process.env.PUBLIC_URL}/game`} text='Start'/>
                    </div>
                </div>
            </div>
        </main>
);

export default GameStart;
