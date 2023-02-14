import React from 'react';
import './styles.css';

interface ButtonProps {
    size?: 'small-button' | 'large-button',
    label: string,
    action: () => void
}

export const Button = ({ size = 'small-button', label, action } : ButtonProps) => {

    return(
        <button className={`button-pattern ${size}`} onClick={action}>
            <span>{label}</span>
        </button>
    )
}