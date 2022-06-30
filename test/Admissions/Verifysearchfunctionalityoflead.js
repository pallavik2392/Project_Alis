const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify search functionality working fine by passing mobile number",function(){
    this.retries(3)

    it("Search field of lead",async()=> {
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

        await Leadpage1.searchFunctionality(signinData.Searchfunctiondata);
        await browser.pause(5000);

        
        const message=await $("//tbody/tr[1]/td[5]");
        await expect(message).toHaveTextContaining(signinData.Searchfunctiondata);
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifysearchfunctionalityforlead.png")
    })
})