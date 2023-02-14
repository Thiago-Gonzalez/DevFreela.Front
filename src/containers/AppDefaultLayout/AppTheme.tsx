import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import baseTheme from "../../commons/styles/theme";


const theme = createTheme(baseTheme);

interface AppThemeProps {
    children?: React.ReactNode | React.ReactNode[]
}

const AppTheme = ({ children } : AppThemeProps) => {
    
    return (
        <StyledThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledThemeProvider>
    )
}

export default AppTheme;