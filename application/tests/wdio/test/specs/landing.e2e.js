const LandingPage = require("../pageobjects/landing.page")

describe("Chess Project Initial Load", () => {
    it("should load landing page", async () => {
        await LandingPage.open();
        const expected = "Chess App";
        await expect(LandingPage.header).toMatch(expected)
    });
});