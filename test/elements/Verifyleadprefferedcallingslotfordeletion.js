const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify prefferedstart and end time field for deletion",function(){
    this.retries(3)

    it("prefferedstart and end time field for deletion",async()=> {
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

        await Leadpage1.enterPrefferedCallingslot(signinData.prefferedstarttime,signinData.prefferedendtime);
        await browser.pause(3000);
        
        await Leadpage1.deletecallingslot();
        await browser.pause(3000);
        //const message=await $("//p[@id='postalCode-helper-text']");
        //await expect(message).toHaveTextContaining("Only digits are allowed");
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyleadprefferedcallingslotfordeletion.png")
    })
})