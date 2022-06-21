const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");

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

        await Coursepage.clickOnBasictab();
        await browser.pause(3000);
        await Coursepage.updateCourselocation(signinData.updatecourselocation);
        await browser.pause(3000);
        await Coursepage.enterCourseLocation(signinData.replacecourselocation);
        await browser.pause(3000);

        await Coursepage.updateLangaugeofinstruction(signinData.updatelangaugeinstruction);
        await browser.pause(3000);
        await Coursepage.enterlangaugeofInstruction(signinData.replacelangaugeinstruction);
        await browser.pause(3000);
 
        await Coursepage.updatePracticalrequirement(signinData.updatepracticalrequirement);
        await browser.pause(3000);
        await Coursepage.enterPracticalRequirement(signinData.replacepracticalrequirement);
        await browser.pause(3000);

        await Coursepage.updateMedicalrequirement(signinData.updatemedicalrequirement);
        await browser.pause(3000);
        await Coursepage.enterMedicalRequirement(signinData.replacemedicalrequirement);
        await browser.pause(3000);

        await Coursepage.updateModesofinstruction(signinData.updatemodeofinstruction);
        await browser.pause(3000);
        await Coursepage.enterModesOfInstruction(signinData.replacemodeofinstruction);
        await browser.pause(3000);
        await Coursepage.updatesavebasics();
        await browser.pause(3000);

        //await Coursepage.clickOncirriculum();
        //await browser.pause(3000);
        await Coursepage.updateTopic(signinData.updatetopic);
        await browser.pause(3000);
        await Coursepage.clearradiobuttonfortopic(signinData.Updateradiobutton);
        await browser.pause(3000);
        await Coursepage.addTopic(signinData.replacetopic,signinData.replaceradiobutton);
        await browser.pause(3000);
        await Coursepage.updateClickoncirriculumsave();
        await browser.pause(3000);

        //await Coursepage.clickOnfeestab();
        //await browser.pause(3000);
        await Coursepage.updateFeetype(signinData.updatefeetype);
        await browser.pause(3000);
        await Coursepage.updateFeeamount(signinData.updatefeeamount);
        await browser.pause(3000);
        await Coursepage.addFee(signinData.replacefeetype,signinData.replacefeeamount);
        await browser.pause(3000);
        await Coursepage.updatesaveFees();
        await browser.pause(3000);

        //await Coursepage.clickOnpayment();
        //await browser.pause(3000);
        await Coursepage.updateCreditsredeemable(signinData.updatecreditredeemable);
        await browser.pause(3000);
        await Coursepage.addScholorship(signinData.replacecreditredeemable);
        await browser.pause(3000);
        await Coursepage.clickOnupdatepaymentsave();
        await browser.pause(3000);


        //await Coursepage.clickOnscheduletab();
        //await browser.pause(3000);
        
        await Coursepage.clickOnbatchedit();
        await browser.pause(3000);
        
        await Coursepage.updateBatchlocation(signinData.updatebatchlocation);
        await browser.pause(3000);
        await Coursepage.selectBatchlocation(signinData.replacebatchlocation);
        await browser.pause(3000);
        await Coursepage.updatePracticallocation(signinData.updatepracticallocation);
        await browser.pause(3000);
        await Coursepage.selectPracticalLocation(signinData.replacepracticallocation);
        await browser.pause(3000);
        await Coursepage.updateBatchlangauge(signinData.updatebatchlaungauge);
        await browser.pause(3000);
        await Coursepage.selectBatchlangauge(signinData.replacebatchlaungauge);
        await browser.pause(3000);
        await Coursepage.updateVirtualcapacity(signinData.updatevirtualcapacity);
        await browser.pause(3000);
        await Coursepage.addVertualcapacity(signinData.replacevirtualcapacity);
        await browser.pause(3000);
        await Coursepage.updatePhysicalcapacity(signinData.updatephysicalcapacity);
        await browser.pause(3000);
        await Coursepage.addPhysicalcapacity(signinData.replacephysicalcapacity);
        await browser.pause(3000);

       await Coursepage.updateBatchstartdate(signinData.updatebatchstartdate,signinData.replacedate);
        await browser.pause(3000);
        await Coursepage.updateBatchenddate(signinData.updatebatchenddate,signinData.replacebatchenddate);
        await browser.pause(3000);
        
        //await Coursepage.updateBatchtime(signinData.updatebatchtime,signinData.replacestarttime);
        //await browser.pause(3000);
      /*  await Coursepage.updateBatchendtime(signinData.updatebatchtime,signinData.updateendtime,signinData.replaceendtime);
        await browser.pause(3000);

        await Coursepage.updateFrequency(signinData.updatefrequency);
        await browser.pause(3000);
        await Coursepage.setFrequency(signinData.replacefrequency,signinData.updateweek);
        await browser.pause(3000);
*/

      await Coursepage.clickOnupdatebatchsave();
      await browser.pause(3000);







    })
    
})