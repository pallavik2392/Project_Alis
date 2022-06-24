const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");

describe("Verify username field by invalid email",function(){

    it("username with invalid email",async () => {

        await browser.url("https://dev-alis.viasimplex.in/login");
        console.log(browser.getUrl());
        await browser.pause(5000);

       await signinpage.enterUsername(signinData.usernamewithinvalidemail);
        await browser.pause(5000);

       

         const message=await $("//p[@id='username-helper-text']");
        await expect(message).toHaveTextContaining("Email address is invalid");


    })
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyusernamewithinvalidemail.png")
    })
})