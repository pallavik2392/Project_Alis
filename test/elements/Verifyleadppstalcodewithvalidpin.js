const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify postalcode field by passing valid pincode",function(){
    it("postalcode field with validpincode",async()=> {
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

        await Leadpage1.enterPostalcode(signinData.leadpostalcodefieldwithvalidpin);
        await browser.pause(3000);
        //const message=await $("//p[@id='postalCode-helper-text']");
        //await expect(message).toHaveTextContaining("Only digits are allowed");
    })
})