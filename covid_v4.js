// This code is to run after an initial Trojan Check
// This code assumes that Trojan Check has been completed once before.
// Run this code to get a screenshot saved to your PC.

module.exports = {
    before: function (browser) {
        //Declaring Global Timeout
        browser
            .globals.waitForConditionTimeout = 7000
    },
    'Login as guest': function (browser) {
        browser
            .url('https://trojancheck.usc.edu/login')
            .waitForElementVisible('body')
            .useXpath().click("//*[contains(text(),' Log in with your USC NetID ')]")
            .saveScreenshot('./Desktop/LMAO/reports/test.png')
            .pause(100)
            .setValue("//*[@id='username']", "YOUR USERNAME HERE")
            .pause(100)
            .setValue("//*[@id='password']", "YOUR PASSWORD HERE")
            .pause(100)
            .useXpath().click("//*[contains(text(),'Sign in')]")
            .pause(100)
            .useXpath().click("//*[contains(text(),' Continue ')]")
            .pause(100)
            browser.execute('scrollTo(0,375)')
            .saveScreenshot('./YOUR PATH HERE/QRcode.png');
    },

    after: function (browser) {
        browser.end();
    }
}