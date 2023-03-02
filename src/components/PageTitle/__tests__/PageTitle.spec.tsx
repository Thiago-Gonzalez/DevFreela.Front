import { cleanup, fireEvent } from "@testing-library/react";
import { renderWithTheme } from "../../../unit-tests/utils/renderWithTheme";
import { PageTitle } from "../index";

const actionButton = {
    label: "Teste",
    action: jest.fn()
}

const mountComponent = () => {
    return renderWithTheme(
        <PageTitle title="Título da página" actionButton={actionButton} />
    )
}

beforeEach(cleanup);

describe("[components] PageTitle", () => {
    it("should render PageTitle", () => {
        expect(mountComponent().container).toBeTruthy();
        expect(mountComponent().container).toHaveTextContent("Título da página");
    });

    it("should onClick in PageTitle component", () => {
        const button = mountComponent().getByTestId("page-title-button");

        fireEvent.click(button);

        expect(actionButton.action).toHaveBeenCalled();
    });
});