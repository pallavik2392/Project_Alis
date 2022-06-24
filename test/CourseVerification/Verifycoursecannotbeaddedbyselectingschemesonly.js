const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");

describe("addcourse with schemes and offers only",function(){
    this.retries(3)

    it("course with schemes and offer",async() =>{
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

        await Coursepage.enterCoursename(signinData.course2);
        await browser.pause(5000);
        await Coursepage.enterShortCode(signinData.courseshortcode2);
        await browser.pause(5000);
        await Coursepage.clickOnoverviewsave()
        await browser.pause(5000);


        const message=await $("//div[@class='MuiAlert-message css-1w0ym84']");
        await expect(message).toHaveTextContaining("New course added");

        await Coursepage.clickOnpayment();
        await browser.pause(3000);


    
        await Coursepage. disableScholarshipradiobutton();
        await browser.pause(3000);

        
        await Coursepage.disableUpfront();
        await browser.pause(3000);
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
        await expect(message1).toHaveTextContaining("Select at least 1 payment option");
    })
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifycoursecannotbeaddedwithschemesonly.png")
    })
})
