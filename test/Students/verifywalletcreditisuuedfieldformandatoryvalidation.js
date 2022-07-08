const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Studentpage = require("../../pages/Studentpage");
const Coursespage = require("../../pages/Coursespage");

describe("Verify courses wallet credit to be issued  field for mandatory validation ",function(){
    this.retries(2)

    it("wallet credit to be issued  field for mandatory validation",async()=> {
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
        
        await Studentpage.clickOnstudentMenu();
        await browser.pause(3000);

        await Studentpage.searchstudentbynumber(signinData.studentsearchbymobilenumberforverifyingpaymentdetails);
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudent();
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudentspaymenttab();
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudentscoursestab();
        await browser.pause(3000);
        
        await Studentpage.clickOnaddtowallet();
        await browser.pause(3000);
        await Studentpage.entertextinaddtowalletreasonfield(signinData.validdataforwalletcreditissued);
        await browser.pause(3000);
        await Studentpage.clickOnaddtowalletsave();
        await browser.pause(3000);

        const message=await $("//p[@id='amount-helper-text']");
        await expect(message).toHaveTextContaining("This field is required");
        await browser.pause(3000);




    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifywalletcreditissuedformandatoryfield.png")
    })
})