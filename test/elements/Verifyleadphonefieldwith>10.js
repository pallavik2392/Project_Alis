const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify phonenumber field by passing >10digits",function(){
    it("phonenumber field with >10digits",async()=> {
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

        await Leadpage1.enterPhonenumber(signinData.leadphonefieldwithmorethan10digits);
        await browser.pause(3000);
        const message=await $("//p[@id='mobile-helper-text']");
        await expect(message).toHaveTextContaining("Please enter valid 10 digit phone number");
    })
})