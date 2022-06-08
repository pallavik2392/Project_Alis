const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Staffpage = require("../../pages/Staffpage");

describe("verify Staff  phonenumber field by passing <10 digit",function(){
    it("Staff phonenumber field with <10 digit", async() =>{
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
        await Staffpage.enterPhonenumber(signinData.staffphonewithlessthan10);
        await browser.pause(3000);

        const message=await $("//p[@id='mobile-helper-text']");
        await expect(message).toHaveTextContaining("Please enter valid 10 digit phone number");

    })
})