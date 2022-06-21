const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Staffpage = require("../../pages/Staffpage");

describe("verify Staff first name field by passing symbols",function(){
    it("Staff first name field with symbols", async() =>{
        await browser.url("https://dev-alis.viasimplex.in/");
        console.log(browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(3000);
        await signinpage.enterUsername(signinData.usercred);
        await browser.pause(1000);
        await signinpage.enterPassword(signinData.passcred);
        await browser.pause(1000);
        await signinpage.clickOnSubmit();
        await browser.pause(5000);

        await Staffpage.clickOnstaff();
        await browser.pause(5000);
        await Staffpage.clickOnAddstaff();
        await browser.pause(5000);
        await Staffpage.enterFirstname(signinData.stafffirstnamewithsymbols);
        await browser.pause(3000);

        const message=await $("//p[@id='firstName-helper-text']");
        await expect(message).toHaveTextContaining("Please enter valid name");
        await browser.saveScreenshot("./ScreenshotsforAlis/staff9.png");


    })
})