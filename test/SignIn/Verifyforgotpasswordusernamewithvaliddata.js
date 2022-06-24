//const { default: $ } = require("webdriverio/build/commands/browser/$");
const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");

describe("Verify forgot passwords username with valid data",function(){

    it("forgot passwords username with valid data",async () => {

        await browser.url("https://dev-alis.viasimplex.in/login");
        console.log(browser.getUrl());
        await browser.pause(3000);

        const forgotpassword=await $("//a[contains(text(),'Having trouble signing in?')]");
       await forgotpassword.click();
        await browser.pause(3000);

       const FPusername=await $("//input[@id='username']");
       await FPusername.setValue(signinData.forgotpasswordusernamewithvalidemail);

       
       

       
    })
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyforgotpasswordwith valid data.png")
    })
})