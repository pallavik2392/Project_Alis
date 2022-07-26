const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Studentpage = require("../../pages/Studentpage");
const Coursespage = require("../../pages/Coursespage");
const CountDemo = require("../../pages/countstudent");
const console = require("console");


describe("Verify billed,paid,balance amount with course amounts for multiple course",function(){
    //this.retries(2)

    it("Verify billed,paid,balance amount for multiple course",async()=> {
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

        await Studentpage.searchstudentbynumber(signinData.StudentmobilenumbertoUpdatemode);
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudent();
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudentspaymenttab();
        await browser.pause(3000);
        courseamountlist = await CountDemo.getcourseslist();
        console.log("result of courseamountlist",courseamountlist);
        console.log("first billed amount",courseamountlist[0]);
        console.log("second billed amount",courseamountlist[3]);

        
       
       

    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifybillingamountsformultipleappliedcourse.png")
    })
})