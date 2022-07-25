const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");
const Paymentreviewpage = require("../../pages/Paymentreviewpage");
const console = require("console");
const Studentpage = require("../../pages/Studentpage");
const { default: $ } = require("webdriverio/build/commands/browser/$");
var expect = require('chai').expect



describe("Update mode ",function(){
   // this.retries(2)

    it(" Update mode",async()=> {
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
        await Studentpage.clickOnstudentMenu();
        await browser.pause(8000);
        await Studentpage.searchstudentbynumber(signinData.StudentmobilenumbertoUpdatemode);
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudent();
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudentspaymenttab();
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudentscoursestab();
        await browser.pause(3000);
        await Studentpage.clickOnUpdatemode();
        await browser.pause(3000);
        await Paymentreviewpage.Selectmodes(signinData.Mode4);
        await browser.pause(3000);
       // await Paymentreviewpage.Enterduedate(signinData.Duedatetoupdatemode)
        await browser.pause(3000);
       // await Studentpage.clickOnsaveofupdatemode();
        await browser.pause(3000);

        const message=await $("//div[@class='MuiAlert-message css-1w0ym84']");
        await expect(message).toHaveTextContaining("Invoice updated");


        
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyupdatemodefunction.png")
    })
})