import React from 'react';
import { Button } from '../Button';
import './styles.css';

interface TitleProps {
    title: string,
    actionButton?: {
        label: string,
        action: () => void
    }
}

export const PageTitle = ({ title, actionButton } : TitleProps) => {

    return(
        <div className='df-page-title-container'>
            <h1>{title}</h1>
            {actionButton && (
                <Button
                    label={actionButton.label}
                    action={actionButton.action}
                />
            )}
        </div>
    )
}