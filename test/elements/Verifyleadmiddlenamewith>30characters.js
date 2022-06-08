const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify middle name field by passing >30 characters",function(){
    it("middle name field with >30 characters",async()=> {
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

        await Leadpage1.enterMiddlename(signinData.leadmiddlenamewithmorethan30characters);
        await browser.pause(3000);
        const message=await $("//p[@id='middleName-helper-text']");
        await expect(message).toHaveTextContaining("Cannot be more than 30 characters");
    })
})