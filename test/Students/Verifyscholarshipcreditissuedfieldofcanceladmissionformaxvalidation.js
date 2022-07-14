const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Studentpage = require("../../pages/Studentpage");
const Coursespage = require("../../pages/Coursespage");
var expect = require('chai').expect


describe("Verify scholarship credit return   field for max  validation ",function(){
    //this.retries(2)

    it(" scholarship credit return   field for max validation",async()=> {
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
        
        await Studentpage.clickOncanceladmissionofcoursestab();
        await browser.pause(3000);
        const amount=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/form[1]/div[1]/div[3]/div[1]/div[2]/child::p").getText();
        const newamount=amount+10;
        console.log(newamount);

        await Studentpage.enteramountinscholarshipcreditreturn(newamount);
        await browser.pause(3000);
       
        const message=await $("//p[@id='scholarship-helper-text']").getText();
        const newmessage=message.substring(0,28);
        console.log(newmessage);
        await browser.pause(3000);
        const result=newmessage.concat(amount);
        console.log(result);
        await browser.pause(3000);


        await expect(message).to.equal(result);


    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyscholarshipcreditamountformaxvalue.png")
    })
})