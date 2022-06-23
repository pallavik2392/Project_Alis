const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify alternate phonenumber field by passing invalidnumber",function(){
    this.retries(3)

    it("alternate phne number  field by passing invalidnumber",async()=> {
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

        await Leadpage1.enterAlternatePhonenumber(signinData.leadalternatephonewithinvalidnumber);
        await browser.pause(3000);
        const message=await $("//p[@id='alternateMobileNumber-helper-text']");
        await expect(message).toHaveTextContaining("Please enter valid 10 digit phone number");
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyleadalternatephonewithinvalidnumber.png")
    })
})