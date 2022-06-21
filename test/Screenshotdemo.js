//const { browser } = require("protractor")

describe("screenshot in wdio",()=>{
    it("screenshot for chrome",async() =>{

        await browser.url("https://staging.wemotive.in/");
        await browser.saveScreenshot("./ScreenshotsforAlis/wdio8.png");
    })
})