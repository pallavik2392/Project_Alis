const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Supportpage = require("../../pages/Supportpage");

describe("verify for junior role new ticket button should not be exist",function(){
    this.retries(1)

    it("verify new ticket button should not be exist for junior",async()=> {
        await browser.url("https://dev-alis.viasimplex.in/");
        console.log(browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(3000);
        await signinpage.enterUsername(signinData.Juniorusername);
        await browser.pause(1000);
        await signinpage.enterPassword(signinData.Juniorpassword);
        await browser.pause(1000);
        await signinpage.clickOnSubmit();
        await browser.pause(5000);
        await Supportpage.clickOnsupport();
        await browser.pause(5000);

        await Supportpage.VerifyNewticketbuttonforRolewiseaccessNotexist();
        await browser.pause(5000);

       
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyjunioraccessfornewticketbuttonnotexist.png")
    })
})