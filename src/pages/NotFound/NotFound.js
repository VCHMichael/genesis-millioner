import React from 'react';
import Button from '../../components/Button/Button';
import './NotFound.scss';

function NotFound() {
  return (
        <div className='gameContainer__main'>
            <div className='wrapper'>
                <div className='content-notFound'>
                    <h1 className='content-notFound__title'>
                        404
                    </h1>
                    <h6 className='content-notFound__description'>
                        Page not found...
                    </h6>
                    <Button link='/' text='Go to HOME'/>
                </div>
            </div>
        </div>
  );
}

export default NotFound;
