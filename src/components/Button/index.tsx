import React from 'react';
import { Button } from '@mui/material';
import styled from "styled-components";

const ButtonPatternStyled = styled(Button)`
    && {
        height: 40px;
        border-radius: 40px;
        text-transform: inherit;
        font-size: 14px;
        font-weight: bold;
    }
`

ButtonPatternStyled.defaultProps = {
    disableElevation: true,
    variant: "contained"
}

export default ButtonPatternStyled;