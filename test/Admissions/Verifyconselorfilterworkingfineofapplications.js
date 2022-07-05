const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify conselor filter  working fine for applications ",function(){
    this.retries(2)

    it("conselor filter for applications",async()=> {
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

        await Leadpage1.conselorFilterworkingofApplications(signinData.searchdataforconselorsfilterofapplications,signinData.searchdataforconselorfilterofapplicationsforconselor);
        await browser.pause(6000);

        
        const message=await $("//tbody/tr[1]/td[4]");
        await expect(message).toHaveTextContaining(signinData.searchdataforconselorsfilterofapplications);
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyconselorfilterforapplications.png")
    })
})