//const { browser } = require("protractor")

describe("screenshot in wdio",()=>{
    it("screenshot for chrome",async() =>{

        await browser.url("https://staging-alis.wemotive.in/");
        await browser.saveScreenshot("./ScreenshotsforAlis/wdio5.png");
    })
})