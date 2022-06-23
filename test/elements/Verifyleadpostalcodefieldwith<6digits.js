const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify postalcode field by passing <6 digits>",function(){
    this.retries(3)

    it("postalcode field with <6 digits>",async()=> {
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

        await Leadpage1.clickOnnewlead();
        await browser.pause(5000);

        await Leadpage1.enterPostalcode(signinData.leadpostalcodefieldlessthan6digit);
        await browser.pause(3000);
        const message=await $("//p[@id='postalCode-helper-text']");
        await expect(message).toHaveTextContaining("Cannot be less than 6 characters");
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyleadpostalcodefieldwith<6digits.png")
    })
})