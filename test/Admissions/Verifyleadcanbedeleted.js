const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify lead can be deleted ",function(){
    this.retries(2)

    it("delete lead",async()=> {
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

        await Leadpage1.clickOndeletelead();
        await browser.pause(5000);
        await Leadpage1.confirmDeletelead();
        await browser.pause(5000);


        const msg=await $("//div[@class='MuiAlert-message css-1w0ym84']");
        await expect(msg).toHaveTextContaining("Lead successfully deleted");


    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyleadcan be deleted .png")
    })
})