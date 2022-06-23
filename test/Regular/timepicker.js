const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");
//const { browser } = require("protractor");

describe("Updatecourse",function(){
    it("course",async() =>{
    await browser.url("https://dev-alis.viasimplex.in/");
        console.log(browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(3000);
        await signinpage.enterUsername(signinData.usercred);
        await browser.pause(1000);
        await signinpage.enterPassword(signinData.passcred);
        await browser.pause(1000);
        await signinpage.clickOnSubmit();
        await browser.pause(3000);
        await Coursepage.clickOncourses();
        await browser.pause(3000);
        await Coursepage.clickOnparticularcourse(signinData.searchcoursename);
        await browser.pause(3000);

        await Coursepage.clickOnscheduletab();
        await browser.pause(3000);
        
        await Coursepage.clickOnbatchedit();
        await browser.pause(3000);
        await Coursepage.updateFrequency(signinData.updatefrequency);
        await browser.pause(3000);
        
        const frequency=await $("//input[@id='frequency']");
        await frequency.addValue('Every Month');
        const select=await $("//li[@id='frequency-option-0']");
        await select.click();
        await browser.pause(6000);

        const month=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[10]/div[1]/div[2]/child::div/following-sibling::div/child::p");
            await month.doubleClick();
            await browser.pause(4000);

           

            const week=await $("//li[@id='repeats-option-0']");
            await week.click();
            await browser.pause(4000);

            
       /* if(Text1==='Every Month'){
            const month=await $("//input[@id='repeats']");
            await month.setValue(Text2);
            const week=await $("//li[@id='repeats-option-0']");
            await week.click();
        }

*/

       

    })
})