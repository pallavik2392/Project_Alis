const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");

describe("Verification of bajaj finance's downpayment  field for max validation ",function(){
    this.retries(3)

    it("course  downpayment  field for flat percentage",async() =>{
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
        //passing only downpayment amount from different set of data to veryfy other text is same as used while  adding course
        await Coursepage.selectBajajfinancemode(signinData.BajajdiscountType,signinData.BajajDiscountamount,signinData.coursepaymentbajajdownpaymentbypassingmaxvalue,signinData.BajajmaxInstallment,signinData.BajajDocuments);
        await browser.pause(7000);

        const message=await $("//p[@id='Down Payment-helper-text']");
        await expect(message).toHaveTextContaining("Cannot be more than 999999");

        

    })
})
