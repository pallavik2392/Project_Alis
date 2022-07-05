const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify can send invite code by using invite code  button ",function(){
    this.retries(2)

    it("send invitation by using invite code button",async()=> {
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
        await browser.pause(5000);

        await Leadpage1.clickOninviteleadbutton();
        await browser.pause(3000);

        const msg=await $("//div[@class='MuiAlert-message css-1w0ym84']");
        await expect(msg).toHaveTextContaining("Invitation code sent");


    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyinvitationcanbesendthroughinvitecodebutton.png")
    })
})