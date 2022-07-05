const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify search functionality working fine for invitee",function(){
    this.retries(3)

    it("Search field of invitee",async()=> {
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
        await Leadpage1.clickOninviteetab()
        await browser.pause(5000);

        await Leadpage1.searchinviteefunction(signinData.searchdataofinvitee);
        await browser.pause(5000);

        const message=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/h5[1]");
        await expect(message).toHaveTextContaining(signinData.searchdataofinvitee);

    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifysearchfunctionalityforinvitee.png")
    })
})