const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify whatsapp phonenumber field by passing >10 numbers",function(){
    it("whatsapp number  field by passing >10 numbers",async()=> {
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

        await Leadpage1.enterMobilenumber(signinData.leadwhatsappwithgreaterthan10numbers)
        await browser.pause(3000);
        const message=await $("//p[@id='whatsappNumber-helper-text']");
        await expect(message).toHaveTextContaining("Please enter valid 10 digit phone number");
    })
})