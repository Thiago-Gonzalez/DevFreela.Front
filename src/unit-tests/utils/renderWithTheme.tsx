import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../containers/AppDefaultLayout/AppTheme"

interface ThemedComponentProps {
    children?: React.ReactNode | React.ReactNode[]
}

const ThemedComponent = ({ children } : ThemedComponentProps) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const renderWithTheme = (ui : ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
    render(ui, { wrapper: ThemedComponent, ...options });

export * from '@testing-library/react'
export { renderWithTheme }