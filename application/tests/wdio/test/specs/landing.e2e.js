const LandingPage = require("../pageobjects/landing.page")

describe("Chess Project Initial Load", () => {
    it("should load landing page", async () => {
        await LandingPage.open();
        const expected = "Chess App";
        const actual = await LandingPage.header.getText();
        await expect(actual).toMatch(expected)
    });
});