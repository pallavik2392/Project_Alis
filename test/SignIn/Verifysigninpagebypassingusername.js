const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");

describe("Verify sign in page using username only",function(){

    it("signin with username only",async () => {

        await browser.url("https://dev-alis.viasimplex.in/login");
        console.log(browser.getUrl());
        await browser.pause(5000);

       await signinpage.enterUsername(signinData.usercred);
        await browser.pause(5000);

        await signinpage.clickOnSubmit();
        await browser.pause(10000);

         const message=await $("//p[@id='password-helper-text']");
        await expect(message).toHaveTextContaining("This field is required");


    })
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifysigninpagebypassingusername.png")
    })
})