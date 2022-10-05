const Page = require("./page");

class LandingPage extends Page {
    get header() {
        const locatorValue = "#app-header"
        return $(locatorValue)
    }

    open() {
        return super.open("");
    }
}

module.exports = new LandingPage();