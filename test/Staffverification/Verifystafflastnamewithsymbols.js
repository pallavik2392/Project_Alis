//const { browser } = require("protractor");
const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Staffpage = require("../../pages/Staffpage");

describe("verify Staff last name field by passing numbers",function(){
    it("Staff last name field with numbers", async() =>{
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
        await Staffpage.enterLastname(signinData.stafflastnamewithsymbols);
        await browser.pause(3000);

        const message=await $("//p[@id='lastName-helper-text']");
        await expect(message).toHaveTextContaining("Please enter valid name");
/*
        await browser.saveScreenshot("./ScreenshotsforAlis/staff11.png");
  */

    })

   // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/onfailure.png")
    })
})