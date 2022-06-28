//const { browser } = require("protractor");

//const { default: $ } = require("webdriverio/build/commands/browser/$");

describe("Verify email for forgot password",function(){
    it("forgot password",async() =>{

        await browser.url("https://www.mailinator.com/");
        await browser.pause(3000);

        const search=await $("//input[@id='search']");
        await search.setValue('sa');
        await browser.pause(6000);

        const Go=await $("//button[contains(text(),'GO')]");
        await Go.click();
        await browser.pause(6000);


        const email=await $("//td[contains(text(),'Reset your ALIS password')]");
        await email.click();
        await browser.pause(6000);
    })
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Forgotpassword verification.png")
    })
})