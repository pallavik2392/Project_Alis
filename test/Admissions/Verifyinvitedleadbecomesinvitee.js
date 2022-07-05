const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify lead becomes invitee after inviting them",function(){
    this.retries(3)

    it("Verify invitee present",async()=> {
        await browser.url("https://dev-alis.viasimplex.in/");
        console.log(browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(3000);
        await signinpage.enterUsername(signinData.usercred);
        await browser.pause(3000);
        await signinpage.enterPassword(signinData.passcred);
        await browser.pause(3000);

        await signinpage.clickOnSubmit();
        await browser.pause(5000);
        

        await Leadpage1.verifyleadbecomesinvitee();
        await browser.pause(3000);

        

    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyinvitedleadbecomesinvitee.png")
    })
})