const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");

describe("Verify course short code field by passing >100 characters",function(){
    this.retries(3)

    it("course short code field with >100 characters",async() =>{
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
        await Coursepage.clickOncourses();
        await browser.pause(5000);
        await Coursepage.clickOnNewcourse();
        await browser.pause(5000);

    
        await Coursepage.enterShortCode(signinData.courseshortcodewithgreaterthan100characters );
        await browser.pause(5000);
        

        const message=await $("//p[@id='shortName-helper-text']");
        await expect(message).toHaveTextContaining("Cannot be more than 100 characters");

    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifycourseshortcodewith>100characters.png")
    })
})