const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Supportpage = require("../../pages/Supportpage");

describe("Verify category filter for next tab of support",function(){
    this.retries(3)

    it("category filter of next tab",async ()=> {
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

        await Supportpage.clickOnsupport();
        await browser.pause(3000);
        
        await Supportpage.clickOnnexttab();
        await browser.pause(3000);
        await Supportpage.Verifycategoryfilter(signinData.Coursenametobepassedincategoryfilter);
        await browser.pause(3000);

        const message=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/child::*");
        await expect(message).toHaveTextContaining(signinData.Coursenametobepassedincategoryfilter);

        
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifycategoryfilterofnexttabofsupport.png")
    })
})