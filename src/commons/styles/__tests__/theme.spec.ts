import theme from "../theme"


describe("[commons] Theme", () => {
    it('should snapshot by theme object', () => {
        expect(theme).toMatchSnapshot();
    })
})