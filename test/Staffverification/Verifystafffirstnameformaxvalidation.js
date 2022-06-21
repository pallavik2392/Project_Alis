const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Staffpage = require("../../pages/Staffpage");

describe("verify Staff first name field by passing >30 characters",function(){
    it("Staff first name field with >30 characters", async() =>{
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
        await Staffpage.enterFirstname(signinData.stafffirstnamewithmaxvalidation);
        await browser.pause(3000);

        const message=await $("//p[@id='firstName-helper-text']");
        await expect(message).toHaveTextContaining("Cannot be more than 30 characters");

        await browser.saveScreenshot("./ScreenshotsforAlis/staff7.png");

    })
})