const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");

describe("Verification of hdfc's maxinstallments field for symbols ",function(){
    this.retries(3)

    it("course  hdfc's maxinstallments field for symbols ",async() =>{
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
        await Coursepage.searchCourse(signinData.Verifycourse);
        await browser.pause(5000);
        await Coursepage.clickonsearchedcourse(signinData.searchedcoursetobeclicked);
        await browser.pause(5000);

        await Coursepage.clickOnpayment();
        await browser.pause(5000);
        //passing only maxinstallments from different set of data to veryfy other text is same as used while  adding course
        await Coursepage.selectHdfcfinancemode(signinData.HDFCdiscountType,signinData.HDFCDiscountamount,signinData.HDFCDownpayment,signinData.coursepaymentHDFCmaxinstallmentwithsymbols,signinData.HDFCDocuments);
        await browser.pause(7000);

        const message=await $("//p[contains(text(),'Only digits are allowed')]");
        await expect(message).toHaveTextContaining("Only digits are allowed");
        

        

    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Cmaxinstallmentswithsymbols.png")
    })
})
