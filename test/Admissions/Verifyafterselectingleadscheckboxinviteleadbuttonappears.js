const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify invitelead button appears after selecting checkbox ",function(){
    this.retries(3)

    it("invite button appears or not",async()=> {
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

        await Leadpage1.selectCheckboxforalllead();
        await browser.pause(6000);

        const invitelead=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[1]/button[5]");
        await expect(invitelead).toBeExisting();

    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyinvitebuttonappears.png")
    })
})