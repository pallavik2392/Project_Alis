const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");

describe("Verify sign in page using password only",function(){

    it("signin with password only",async () => {

        await browser.url("https://dev-alis.viasimplex.in/login");
        console.log(browser.getUrl());
        await browser.pause(5000);

        await signinpage.enterPassword(signinData.passcred);
        await browser.pause(8000);

        await signinpage.clickOnSubmit();
        await browser.pause(10000);

        const message=await $("//p[@id='username-helper-text']");
        await expect(message).toHaveTextContaining("This field is required");


    })
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifysigninpagebypassingpassword.png")
    })
})