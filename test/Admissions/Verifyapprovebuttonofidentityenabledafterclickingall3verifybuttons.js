const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify approve botton  is clickable after verifying all 3 documents ",function(){
    this.retries(2)

    it("verify approve clickable after verifying documents",async()=> {
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
        
        await Leadpage1.clickOnApplicationtab();
        await browser.pause(3000);
        await Leadpage1.clickOnapplicationsviewbutton();
        await browser.pause(3000);

        await Leadpage1.clickOnVerify1stdocument();
        await browser.pause(6000);
        await Leadpage1.verifyidentityapprovebuttonNotclickable();
        await browser.pause(3000);
        await Leadpage1.clickOnVerify2nddocument();
        await browser.pause(3000);
        await Leadpage1.verifyidentityapprovebuttonNotclickable();
        await browser.pause(3000);
        await Leadpage1.clickOnVerify3rddocument();
        await browser.pause(3000);
        await Leadpage1.verifyidentityapprovebuttonclickable();
        await browser.pause(3000);


        
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyapprovebuttonckickableafterverifyingdocuments.png")
    })
})