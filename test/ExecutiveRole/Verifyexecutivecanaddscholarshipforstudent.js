const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Studentpage = require("../../pages/Studentpage");

describe("verify for executive role can add scholorship",function(){
    this.retries(3)

    it("verify executive can add scholarship",async()=> {
        await browser.url("https://dev-alis.viasimplex.in/");
        console.log(browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(3000);
        await signinpage.enterUsername(signinData.Executiveusername);
        await browser.pause(1000);
        await signinpage.enterPassword(signinData.Executivepassword);
        await browser.pause(1000);
        await signinpage.clickOnSubmit();
        await browser.pause(5000);

        await Studentpage.clickOnstudentMenu();
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudent();
        await browser.pause(3000);
        await Studentpage.clickOnpayment();
        await browser.pause(3000);
        await Studentpage.clickOnscholarship();
        await browser.pause(3000);
        await Studentpage.clickOnAddscholarshipicon();
        await browser.pause(3000);

        await Studentpage.addCourseforscholarship(signinData.Coursenameforscholarship);
        await browser.pause(3000);
        await Studentpage.addDateforscholarship(signinData.Dateearnedscholarship);
        await browser.pause(3000);
        await Studentpage.addBenefitsforscholarship(signinData.Benefitsearnedforscholarship)
        await browser.pause(3000);
        await Studentpage.clickOnscholarshipsave();
        await browser.pause(3000);


       
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/VerifyExecutiveaddscholarshiptostudent.png")
    })
})