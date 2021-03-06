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

        await Leadpage1.enterPrefferedCallingslot(signinData.leadprefferedstarttimewithwrongtime ,signinData.leadprefferedcallingendtimewithwrongtime);
        await browser.pause(3000);
        
        
        const message=await $("//p[contains(text(),'Please select valid time interval')]");
        await expect(message).toHaveTextContaining("Please select valid time interval");
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyleadprefferedslotforwrongtimecombination.png")
    })
})