import styled from 'styled-components';
import { Grid } from '@mui/material';

export const TableLineStyled = styled(Grid)`
    border-bottom: 1px solid rgba(196,196,196, 0.35);
    padding: 16px 0;
    
    &:last-child {
        border: none;
    }
`;

export const ValueColumnStyled = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ActionColumnStyled = styled(ValueColumnStyled)`
    justify-content: space-around;
`;

export const TableContainerStyled = styled.div`
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 24px;
`;