const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe ("Update Lead",function(){
    it("Lead",async()=>{
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

        await Leadpage1.clickOnSearch(signinData.leadtoupdate);
        await browser.pause(3000);
        await Leadpage1.clickOnparticularlead();
        await browser.pause(3000);
        

        await Leadpage1.updateFirstname(signinData.updatefirstnamelead);
        await browser.pause(3000);
        await Leadpage1.enterFirstname(signinData.replacefirstnamelead);
        await browser.pause(3000);

        await Leadpage1.updatemiddlename(signinData.updatemidlenamelead);
        await browser.pause(3000);
        await Leadpage1.enterMiddlename(signinData.replacemidlenamelead);
        await browser.pause(3000);

        await Leadpage1.updatelastname(signinData.updatelastnamelead);
        await browser.pause(3000);
        await Leadpage1.enterLastname(signinData.replacelasnamelead);
        await browser.pause(3000);

        await Leadpage1.updateEmail(signinData.updateemaillead);
        await browser.pause(3000);
        await Leadpage1.enterEmail(signinData.replaceemaillead);
        await browser.pause(3000);

        await Leadpage1.updatephone(signinData.updatephone);
        await browser.pause(3000);
        await Leadpage1.enterPhonenumber(signinData.replacephone);
        await browser.pause(3000);

       /* await Leadpage1.updateAlternatephone(signinData.updatealternatephone);
        await browser.pause(3000);
        await Leadpage1.enterAlternatePhonenumber(signinData.replacealternatephone);
        await browser.pause(3000);
      
        await Leadpage1.updateWhataappnumber(signinData.updatewhatsapp);
        await browser.pause(3000);
        await Leadpage1.enterMobilenumber(signinData.replacewhatsapp);
        await browser.pause(3000);
       
        await Leadpage1.updateGender(signinData.updategender);
        await browser.pause(3000);
        await Leadpage1.enterGender(signinData.replacegender);
        await browser.pause(3000);
       
        await Leadpage1.updateDOB(signinData.updateDOB);
        await browser.pause(3000);
        await Leadpage1.enterDOB(signinData.replaceDOB);
        await browser.pause(3000);
         */
        await Leadpage1.updateOccupation(signinData.updateoccupation);
        await browser.pause(3000);
        await Leadpage1.enterOccupation(signinData.replaceoccupation);
        await browser.pause(3000);

        await Leadpage1.updateCommlangauge(signinData.updatecommlangauge);
        await browser.pause(3000);
        await Leadpage1.entercommunicationLangauge(signinData.replacecommlangauge);
        await browser.pause(3000);

        await Leadpage1.updateConselor(signinData.updateconselor);
        await browser.pause(3000);
        await Leadpage1.enterconselor(signinData.replaceconselor);
        await browser.pause(3000);

        await Leadpage1.updateCourse(signinData.updatecourse);
        await browser.pause(3000);
        await Leadpage1.enterCourse(signinData.replacecourse);
        await browser.pause(3000);

        await Leadpage1.updateAcademylocation(signinData.updateacademy);
        await browser.pause(3000);
        await Leadpage1.enterAcademylocation(signinData.replaceacademy);
        await browser.pause(3000);

        await Leadpage1.updateCourselangauge(signinData.updatecourselangauge);
        await browser.pause(3000);
        await Leadpage1.enterCourselangauge(signinData.replacecourselang);
        await browser.pause(3000);

        await Leadpage1.updatePostalcode(signinData.updatepostalcode);
        await browser.pause(3000);
        await Leadpage1.enterPostalcode(signinData.replacepostalcode);
        await browser.pause(3000);

        await Leadpage1.updateAddress1(signinData.updateaddress1);
        await browser.pause(3000);
        await Leadpage1.enterAddress1(signinData.replaceaddress1);
        await browser.pause(3000);

        await Leadpage1.updateAddress2(signinData.updateaddress2);
        await browser.pause(3000);
        await Leadpage1.enterAddress2(signinData.replaceaddress2);
        await browser.pause(3000);

        await Leadpage1.updateLandmark(signinData.updatelandmark);
        await browser.pause(3000);
        await Leadpage1.enterLandmark(signinData.replacelandmark);
        await browser.pause(3000);

        //await Leadpage1.clickOnSave();
        //await browser.pause(3000);
        await Leadpage1.clickOnupadtesave();
        await browser.pause(3000);
       
        const message=await $("//div[@class='MuiAlert-message css-1w0ym84']");
        await expect(message).toHaveTextContaining("Lead updated");


    })
})