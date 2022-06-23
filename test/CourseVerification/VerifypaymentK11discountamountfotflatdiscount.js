const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");

describe("Verification of K11 discount amount  field for flat discount ",function(){
    this.retries(3)

    it("course  K11 discount amount field for flat ",async() =>{
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
        await Coursepage.selectK11mode(signinData.K11discountType,signinData.coursepaymentK11discountamountforflat,signinData.K11Downpayment,signinData.K11maxInstallment,signinData.K11Documents);
        await browser.pause(5000);
        //need to make changes in following line
        const message=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[3]/div[2]/div[2]/div[2]/div[1]/p[1]");
        await expect(message).toHaveTextContaining("Cannot be more than 999");
        

        

    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/VerifypaymentK11discountamountforflatdiscount.png")
    })
})
