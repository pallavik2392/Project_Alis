const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");

describe("Verify username field by valid email",function(){

    it("username with valid email",async () => {

        await browser.url("https://dev-alis.viasimplex.in/login");
        console.log(browser.getUrl());
        await browser.pause(5000);

       await signinpage.enterUsername(signinData.usernamewithvalidemail);
        await browser.pause(5000);

       

         


    })
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyusernamewithvalidemail.png")
    })
})