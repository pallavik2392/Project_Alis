//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
const signinData = require("../Data/signindata");
const Leadpage1 = require("../pages/Leadpage1");
const signinpage = require("../pages/signinpage");



describe("automate date",() =>{
    it("datepicker", async ()=> {
        await browser.url("https://staging-alis.wemotive.in/");
        console.log(browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(3000);
        await signinpage.enterUsername(signinData.usercred);
        await browser.pause(1000);
        await signinpage.enterPassword(signinData.passcred);
        await browser.pause(1000);
        await signinpage.clickOnSubmit();
        await browser.pause(5000);

        await Leadpage1.clickOnnewlead();
        await browser.pause(5000);
        const date=await $("//input[@placeholder='What is the date of birth?']/parent::div");
        await date.click();
        await browser.pause(3000);
        await browser.pause(3000);
        let year =signinData.lyear;
        await browser.pause(3000);
        await console.log("year is : " +year);
        let month=signinData.lmonth;
        await browser.pause(3000);
        await console.log("month is : " +month);
        let day=signinData.lday;
        await browser.pause(3000);
        await console.log("day is : " +day);

        while(true){

        const text= await $("/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div/div[1]/div[1]/div[2]/div").getText();
        await browser.pause(1000);

        const text1=await $("/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div").getText();
        await browser.pause(1000);

        if(text===year && text1===month){
             break;
         }else{
          await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/button[1]/*[1]").click();
         }

    }
    await $("(//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div/div/button[1])[contains(text(),"+day+")]").click();
    await browser.pause(3000);
         
   

    })
})