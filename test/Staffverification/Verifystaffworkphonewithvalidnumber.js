const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Staffpage = require("../../pages/Staffpage");

describe("verify Staff work phonenumber field by passing validnumber",function(){
    this.retries(3)

    it("Staff work phonenumber field with validnumber", async() =>{
        await browser.url("https://dev-alis.viasimplex.in/");
        console.log(browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(3000);
        await signinpage.enterUsername(signinData.usercred);
        await browser.pause(1000);
        await signinpage.enterPassword(signinData.passcred);
        await browser.pause(1000);
        await signinpage.clickOnSubmit();
        await browser.pause(5000);

        await Staffpage.clickOnstaff();
        await browser.pause(5000);
        await Staffpage.clickOnAddstaff();
        await browser.pause(5000);
        await Staffpage.enterworkPhonenumber(signinData.staffworkphonewithvalidnumber);
        await browser.pause(3000);

        //const message=await $("//p[@id='workPhone-helper-text']");
        //await expect(message).toHaveTextContaining("Please enter valid 10 digit phone number");

        //await browser.saveScreenshot("./ScreenshotsforAlis/staff29.png");

    })
// screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifystaffworkphonewithvalidnumber.png")
    })
})