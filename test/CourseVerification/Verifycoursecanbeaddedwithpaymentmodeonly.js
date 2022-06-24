const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");

describe("addcourse with  payment mode only",function(){
    this.retries(3)

    it("course with payment mode only",async() =>{
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

        await Coursepage.enterCoursename(signinData.course5);
        await browser.pause(5000);
        await Coursepage.enterShortCode(signinData.courseshortcode5);
        await browser.pause(5000);
        await Coursepage.clickOnoverviewsave()
        await browser.pause(5000);


        const message=await $("//div[@class='MuiAlert-message css-1w0ym84']");
        await expect(message).toHaveTextContaining("New course added");

        await Coursepage.clickOnpayment();
        await browser.pause(3000);

        await Coursepage.disableScholarshipradiobutton();
        await browser.pause(3000);
        await Coursepage.disableallschemesandoffers();
        await browser.pause(3000);
        await Coursepage.selectUpfrontmode(signinData.UpfrontdiscountType,signinData.UpfrontdiscountAmount);
        await browser.pause(7000);
        
        
        await Coursepage.selectBajajfinancemode(signinData.BajajdiscountType,signinData.BajajDiscountamount,signinData.BajajDownpayment,signinData.BajajmaxInstallment,signinData.BajajDocuments);
        await browser.pause(7000);
        
        await Coursepage.selectHdfcfinancemode(signinData.HDFCdiscountType,signinData.HDFCDiscountamount,signinData.HDFCDownpayment,signinData.HDFCmaxInstallment,signinData.HDFCDocuments);
        await browser.pause(7000);
       
        await Coursepage.selectK11mode(signinData.K11discountType,signinData.K11Discountamount,signinData.K11Downpayment,signinData.K11maxInstallment,signinData.K11Documents);
        await browser.pause(5000);
        
        await Coursepage.selectPayablewhenablemode(signinData.PayablediscountType,signinData.PayablediscountAmount);
        await browser.pause(7000);

        await Coursepage.clickOnsavepayment();
        await browser.pause(3000);

        const message1=await $("//div[@class='MuiAlert-message css-1w0ym84']");
        await expect(message1).toHaveTextContaining("Course updated");
    })
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifycoursecanbeaddedwithpaymentmodeonly.png")
    })
})
