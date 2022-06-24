const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");

describe("Sign in page with invalid username and valid password ",function(){

    it("signin with invalid username and valid password",async () => {

        await browser.url("https://dev-alis.viasimplex.in/login");
        console.log(browser.getUrl());
        await browser.pause(5000);

       await signinpage.enterUsername(signinData.wrongusername);
        await browser.pause(5000);


       await signinpage.enterPassword(signinData.passcred);
        await browser.pause(8000);


        await signinpage.clickOnSubmit();
        await browser.pause(3000);


        const message=await $("//p[contains(text(),'Incorrect username or password. Please check and t')]");
        await expect(message).toHaveTextContaining("Incorrect username or password. Please check and try again.");
       

    })
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifysigninpagewithinvalidusernameandvalidpassword.png")
    })
})