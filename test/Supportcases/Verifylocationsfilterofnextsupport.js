const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Supportpage = require("../../pages/Supportpage");

describe("Verify locations filter for next tab of support",function(){
    this.retries(3)

    it("locations filter of next tab",async ()=> {
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
        await Supportpage.Verifylocationsfilter(signinData.Coursenametobepassedinlocationfilter);
        await browser.pause(3000);
        const ticket=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/child::h3");
        await ticket.click();


        const message=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[3]/div[2]/child::p");
        await expect(message).toHaveTextContaining(signinData.Coursenametobepassedinlocationfilter);

        
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifylocationsfilterofnexttabofsupport.png")
    })
})