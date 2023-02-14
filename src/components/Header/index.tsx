import React from 'react';
import './styles.css';
import { ReactComponent as LogoComponent } from '../../assets/images/logo.svg';

export const Header = () => {

    return(
        <div className='df-header'>
            <div className='wrapper'>
                <LogoComponent />
            </div>
        </div>
    )
}