//This code is to run in the morning to log in and complete the Trojan Check
//This code assumes that Trojan Check hasnt been completed before

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
            .pause(300)
            .setValue("//*[@id='username']", "YOUR USERNAME HERE")
            .pause(300)
            .setValue("//*[@id='password']", "YOUR PASSWORD HERE")
            .pause(300)
            .useXpath().click("//*[contains(text(),'Sign in')]")
            .pause(300)
            .useXpath().click("//*[contains(text(),' Continue ')]")
            .pause(300)
            .useXpath().click("//*[contains(text(),'Begin wellness assessment')]")
            .pause(300)
            .useXpath().click("//*[contains(text(),'Start screening')]")
            .useXpath().click("(//*[contains(text(),'No')])[1]")
            .pause(300)
            .useXpath().click("(//*[contains(text(),'No')])[2]")
            .pause(300)
            .useXpath().click("//*[contains(text(),'Next')]")
            .pause(300)
            .useXpath().click("(//*[contains(text(),'No')])[1]")
            .pause(300)
            .useXpath().click("(//*[contains(text(),'No')])[2]")
            .pause(300)
            .useXpath().click("(//*[contains(text(),'No')])[3]")
            .pause(300)
            .useXpath().click("(//*[contains(text(),'No')])[4]")
            .pause(300)
            .useXpath().click("(//*[contains(text(),'No')])[5]")
            .pause(300)
            .useXpath().click("(//*[contains(text(),'No')])[6]")
            .pause(300)
            .useXpath().click("(//*[contains(text(),'No')])[7]")
            .pause(300)
            .useXpath().click("(//*[contains(text(),'No')])[8]")
            .pause(300)
            .useXpath().click("//*[contains(text(),'Next')]")
            .pause(300)
            .useXpath().click("//*[contains(text(),'I attest that my answers to the above wellness assessment questions are accurate.')]")
            .pause(300)
            .useXpath().click("//*[contains(text(),'Submit')]")
            .pause(300)
            browser.execute('scrollTo(0,375)')
            .saveScreenshot('./YOUR PATH HERE/QRcode.png');
    },

    after: function (browser) {
        browser.end();
    }
}