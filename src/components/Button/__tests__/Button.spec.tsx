import { cleanup, screen } from "@testing-library/react";
import { renderWithTheme } from "../../../unit-tests/utils/renderWithTheme";
import Button from "../index";

const onClick = jest.fn();

const mountComponent = () => {
    return renderWithTheme(
        <Button data-testid="test-button" onClick={onClick}>
            teste
        </Button>
    )
}

afterEach(cleanup);

describe("[components] Button", () => {
    const { container } = mountComponent();
    it("should render Button", () => {
        expect(container).toBeTruthy();
        expect(container).toHaveTextContent("teste");

        expect(screen.getByTestId("test-button")).toHaveStyle("font-weight: bold")
        expect(screen.getByTestId("test-button")).toHaveStyle("height: 40px");
        expect(screen.getByTestId("test-button")).toHaveStyle("border-radius: 40px");
        expect(screen.getByTestId("test-button")).toHaveStyle("text-transform: inherit");
    });
});