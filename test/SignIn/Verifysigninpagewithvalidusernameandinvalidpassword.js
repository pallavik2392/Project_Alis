const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");

describe("Sign in page with valid username and invalid password ",function(){

    it("signin with valid username and invalid password",async () => {

        await browser.url("https://dev-alis.viasimplex.in/login");
        console.log(browser.getUrl());
        await browser.pause(5000);

       await signinpage.enterUsername(signinData.usercred);
        await browser.pause(5000);


       await signinpage.enterPassword(signinData.wrongpassword);
        await browser.pause(8000);


        await signinpage.clickOnSubmit();
        await browser.pause(3000);


        const message=await $("//p[contains(text(),'Incorrect username or password. Please check and t')]");
        await expect(message).toHaveTextContaining("Incorrect username or password. Please check and try again.");
       

    })
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifysigninpagewithvalidusernameandinvalidpassword.png")
    })
})