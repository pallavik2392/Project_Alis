const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Studentpage = require("../../pages/Studentpage");
const Coursespage = require("../../pages/Coursespage");

describe("Verify credit issued amount with wallet ",function(){
    this.retries(2)

    it("Verify credit issued amount",async()=> {
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
        await Studentpage.clickonparticularstudentswallettab();
        await browser.pause(3000);
        
        const walletamount1=await $("//tbody/tr[1]/td[1]/span[1]/div[1]/child::p").getText();
        let result1=walletamount1.substring(1);
        console.log("result1 is:",result1);
        const walletamount2=await $("//tbody/tr[2]/child::td/child::span/child::div/child::p").getText();
        let result2=walletamount2.substring(1);
        console.log("result2 is:",result2);

        const walletamount3=await $("//tbody/tr[3]/child::td/child::span/child::div/child::p").getText();
        let result3=walletamount3.substring(1);
        console.log("result3 is:",result3);

        const walletamount4=await $("//tbody/tr[4]/child::td/child::span/child::div/child::p").getText();
        let result4=walletamount4.substring(1); 
        console.log("result4 is:",result4);
   

        let totalwalletamount = (parseFloat(result1) + parseFloat(result2) + parseFloat(result3) + parseFloat(result4)).toFixed(2);

        console.log("total amount is: ",totalwalletamount);
        let text="₹";
        let total=text.concat(totalwalletamount);
        console.log("total is",total);
        
        const creditissuedoncard=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[1]/div[2]/div[2]/child::h5");
        await expect(creditissuedoncard).toHaveTextContaining(total);
        await browser.pause(3000);
       

    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifycreditissuedwithwallet.png")
    })
})