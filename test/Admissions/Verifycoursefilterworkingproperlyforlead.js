const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify course filter  working fine ",function(){
    this.retries(2)

    it("course filter for lead",async()=> {
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

        await Leadpage1.Coursefilterworking(signinData.searchdataforcoursefilter);
        await browser.pause(6000);

        
        const message=await $("//tbody/tr[1]/td[3]");
        await expect(message).toHaveTextContaining(signinData.searchdataforcoursefilter);
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifycoursefilterforlead.png")
    })
})