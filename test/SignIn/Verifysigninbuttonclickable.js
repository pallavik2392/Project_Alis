const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");

describe("Verify signin button clickable",function(){

    it("button clickable",async () => {

        await browser.url("https://dev-alis.viasimplex.in/login");
        console.log(browser.getUrl());
        await browser.pause(5000);

       await signinpage.enterUsername(signinData.usernamewithinvalidemail);
        await browser.pause(5000);

       await signinpage.Signinisclickable();
       await browser.pause(5000);



    })
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifysigninbuttonclickable.png")
    })
})