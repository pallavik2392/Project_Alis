const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");

describe("Verify  course version changes if anychange made",function(){
    //this.retries(3)

    it("verify course version change aftermaking any change",async() =>{
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
        
        await Coursepage.clickOnparticularcourse(signinData.searchcoursename);
        await browser.pause(3000);
        await Coursepage.clickOnfeestab();
        await browser.pause(3000);
        const version=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[4]/div[2]/div[1]/div[1]/p[1]").getText();
        console.log("version of course is: ",version);
       let  result=version.substring(version.length-1);
        console.log("result is:",result);
        result++;
        let result1= result;
        console.log("result1 is: ",result1);
        let text1="Course version: ";
        let newversion=text1.concat(result1);
        console.log(newversion);
        await Coursepage.updateFeetype(signinData.updatefeetype);
        await browser.pause(3000);
        await Coursepage.updateFeeamount(signinData.updatefeeamount);
        await browser.pause(3000);
        await Coursepage.addFee(signinData.replacefeetype,signinData.replacefeeamount);
        await browser.pause(3000);
        await Coursepage.updatesaveFees();
        await browser.pause(3000);

        const versionupdate=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[4]/div[2]/div[1]/div[1]/p[1]");
        await expect(versionupdate).toHaveTextContaining(newversion);
        


    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifycourseversionchangesifanychangedoneincourse.png")
    })
    
})