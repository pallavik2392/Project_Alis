const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Staffpage = require("../../pages/Staffpage");

describe("verify executive should not be able to create staff by new staff button not clickable",function(){
    this.retries(3)

    it("verify new staff button not clickable",async()=> {
        await browser.url("https://dev-alis.viasimplex.in/");
        console.log(browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(3000);
        await signinpage.enterUsername(signinData.Executiveusername);
        await browser.pause(1000);
        await signinpage.enterPassword(signinData.Executivepassword);
        await browser.pause(1000);
        await signinpage.clickOnSubmit();
        await browser.pause(5000);

        await Staffpage.VerifyNewstaffbuttonforRolewiseaccessNotclickable();
        await browser.pause(5000);

       
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/VerifyExecutiveaccessfornewstaffbuttonbynewstaffbuttonnotclickable.png")
    })
})