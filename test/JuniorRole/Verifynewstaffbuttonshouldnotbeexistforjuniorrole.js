const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Staffpage = require("../../pages/Staffpage");

describe("verify junior role should not be able to create staff by new staff button not exist",function(){
    this.retries(3)

    it("verify new staff button not exist for junior",async()=> {
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
        await Staffpage.clickOnstaff();
        await browser.pause(5000);

        await Staffpage.VerifyNewstaffebuttonforRolewiseaccessNotexist();
        await browser.pause(5000);

       
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifynewstaffbuttonnotexistforjuniorrole.png")
    })
})