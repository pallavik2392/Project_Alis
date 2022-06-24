const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");

describe("Verify sign in page without passing password and username",function(){

    it("without password and username",async () => {

        await browser.url("https://dev-alis.viasimplex.in/login");
        console.log(browser.getUrl());
        await browser.pause(5000);

        
        await signinpage.clickOnSubmit();
        await browser.pause(10000);

        const message=await $("//p[@id='username-helper-text']");
        await expect(message).toHaveTextContaining("This field is required");

        const message1=await $("//p[@id='password-helper-text']");
        await expect(message1).toHaveTextContaining("This field is required");


    })
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifysigninpagebypassingpassword.png")
    })
})