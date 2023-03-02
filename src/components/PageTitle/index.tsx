import React from 'react';
import Button from '../Button';
import './styles.ts';
import { PageTitleContainerStyled } from './styles';
import { Typography } from '@mui/material';

interface TitleProps {
    title: string,
    actionButton?: {
        label: string,
        action: () => void
    }
}

export const PageTitle = ({ title, actionButton } : TitleProps) => {

    return(
        <PageTitleContainerStyled>
            <Typography variant="h4" fontWeight="bold">{title}</Typography>
            {actionButton && (
                <Button data-testid="page-title-button" onClick={actionButton.action}>
                    {actionButton.label}
                </Button>
            )}
        </PageTitleContainerStyled>
    )
}