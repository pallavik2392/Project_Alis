const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");

describe("Verification of course overview by passing only shortcode",function(){
    it("courseoverview with shortcode only",async() =>{
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

    
        
        await Coursepage.enterShortCode(signinData.courseoverviewwithmandatorycourseshrtcode);
        await browser.pause(5000);
        await Coursepage.clickOnoverviewsave()
        await browser.pause(5000);

        const message=await $("//p[@id='name-helper-text']");
        await expect(message).toHaveTextContaining("This  ");

        await browser.pause(3000);

        await browser.saveScreenshot("./Onfailure4.png");

    })
})