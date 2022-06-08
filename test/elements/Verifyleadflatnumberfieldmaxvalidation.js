const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify flat/house number field by passing >100 characters",function(){
    it("flat/house number field with >100 characters",async()=> {
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

        await Leadpage1.enterAddress1(signinData.leadflatnumberfieldwithmorethan100letters);
        await browser.pause(3000);
        const message=await $("//p[@id='addressLine1-helper-text']");
        await expect(message).toHaveTextContaining("Cannot be more than 100 characters");
    })
})