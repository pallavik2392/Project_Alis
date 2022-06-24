const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");

describe("addcourse with scholarship and one of the payment mode and without schemes",function(){
    this.retries(3)

    it("course with scholarship and one of the payment mode and without schemes",async() =>{
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

        await Coursepage.enterCoursename(signinData.course3);
        await browser.pause(5000);
        await Coursepage.enterShortCode(signinData.courseshortcode3);
        await browser.pause(5000);
        await Coursepage.clickOnoverviewsave()
        await browser.pause(5000);


        const message=await $("//div[@class='MuiAlert-message css-1w0ym84']");
        await expect(message).toHaveTextContaining("New course added");

        await Coursepage.clickOnpayment();
        await browser.pause(3000);

        await Coursepage.addScholorship(signinData.Scalarshipreedemable);
        await browser.pause(5000);
        await Coursepage.disableallschemesandoffers();
        await browser.pause(3000);
        await Coursepage.selectUpfrontmode(signinData.UpfrontdiscountType,signinData.UpfrontdiscountAmount);
        await browser.pause(7000);
        
        
        await Coursepage.disablePayablewhenable();
        await browser.pause(3000);
       await Coursepage.disableBajajfinance();
        await browser.pause(3000);
        await Coursepage.disableHDFC();
        await browser.pause(3000);
        await Coursepage.disableK11EMI();
        await browser.pause(3000);
       

        await Coursepage.clickOnsavepayment();
        await browser.pause(3000);

        const message1=await $("//div[@class='MuiAlert-message css-1w0ym84']");
        await expect(message1).toHaveTextContaining("Course updated");
    })
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifycoursecanbeaddedwithschemesandmodewithoutoffer.png")
    })
})
