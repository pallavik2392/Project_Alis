const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Studentpage = require("../../pages/Studentpage");
const Coursespage = require("../../pages/Coursespage");

describe("Verify billed,paid,balance amount with course amounts ",function(){
    this.retries(2)

    it("Verify billed,paid,balance amount",async()=> {
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
        const amountbilledforcourse=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/child::p").getText();
        let result1 = amountbilledforcourse.substring(8);
        console.log("amount billed is",result1);
        const amountpaidforcourse=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/child::p").getText();
        let result2 = amountpaidforcourse.substring(6);
        console.log("amount paid is",result2)
        const amountbalanceforcourse=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[3]/child::p").getText();
        let result3 = amountbalanceforcourse.substring(9);
        console.log("amount balance is",result3)
        
        const amountbilledoncard=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/child::h5");
        await expect(amountbilledoncard).toHaveTextContaining(result1);
        await browser.pause(3000);

        const amountpaidoncard=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/child::h5");
        await expect(amountpaidoncard).toHaveTextContaining(result2);
        await browser.pause(3000);

        const balancependingoncard=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/child::h5");
        await expect(balancependingoncard).toHaveTextContaining(result3);
        await browser.pause(3000);
       

    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifybillingamountsforsingleappliedcourse.png")
    })
})