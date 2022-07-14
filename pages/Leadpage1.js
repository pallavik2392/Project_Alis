//const { browser } = require("protractor");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { $ } = require("protractor");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { browser } = require("protractor");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
const Page = require("../test/pageobjects/page");

class LeadPage1 extends  Page{

    get leadsearch(){return  $("//input[@placeholder='Search']")}
    get leadcoursefilter(){return  $("//button[normalize-space()='Course: All']")}
    get leadsamplecsv(){return  $("//button[normalize-space()='Download sample CSV']")}
    get leadbulkimport(){return  $("//button[normalize-space()='Bulk Import']")}
    get leadinvite(){return  $("//button[normalize-space()='Invite Leads']")}
    get leadnewlead(){return  $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[1]/button[3]")}
    get leadfname(){return  $("//input[@id='firstName']")}
    get leadmname(){return  $("//input[@id='middleName']")}
    get leadlname(){return  $("//input[@id='lastName']")}
    get leademail(){return  $("//input[@id='email']")}
    get leadphone(){return  $("//input[@id='mobile']")}
    get leadalterphone(){return  $("//input[@id='alternateMobileNumber']")}
    get leadwhatsappnumber(){return  $("//input[@id='whatsappNumber']")}
    get leaddrpgender(){return  $("//input[@id='gender']")}
    get leaddob(){return  $("//body/div[@id='root']/div[1]/div[2]/div[1]/form[1]/div[2]/div[10]/div[2]/div[1]/div[1]")}
    get leadoccup(){return  $("//input[@id='occupation']")}
    get leadcommlangauge(){return  $("//input[@id='communicationLanguage']")}
    get leadconselor(){return  $("//input[@id='counselor']")}
    get leadcourse(){return  $("//input[@id='course']")}
    get leadlocation(){return  $("//input[@id='schoolLocation']")}
    get leadlangauge(){return  $("//input[@id='courseLanguage']")}
    get leadcountry(){return  $("//input[@id='country']")}
    get leadpostal(){return  $("//input[@id='postalCode']")}
    get leadaddress1(){return  $("//input[@id='addressLine1']")}
    get leadaddress2(){return  $("//input[@id='addressLine2']")}
    get leadlandmark(){return  $("//input[@id='landmark']")}
    get leadsave(){return  $("//button[@type='submit']")}
    get leadDOB(){return $("//input[@placeholder='What is the date of birth?']/parent::div")}
    get updateleadsave(){return $("//button[@type='submit']")}
    get leadcancel(){return $("//button[normalize-space()='Cancel']")}
    get addprefferedtime(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/form[1]/div[2]/div[15]/div[2]/div[1]/button[1]")}
    get deletecallingslot(){return $("//div[@role='button']//*[name()='svg']/child::*")}
    get leadediticon(){return $("//tbody/tr[1]/td[8]/span[1]/button[2]")}
    get leadinviteicon(){return $("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[8]/span[1]/button[1]/i[1]")}
    get allleadcheckbox(){return $("//thead/tr[1]/th[1]/span[1]/child::*")}
    get bulkpathfield(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]")}
    get deleteicon(){return $("//tbody/tr[1]/td[8]/span[1]/button[3]")}
    get deleteleadconfirm(){return $("//body/div[2]/div[3]/div[1]/form[1]/div[2]/button[2]")}
    get applicationtab(){return $("//a[contains(text(),'Applications')]")}
    get applicationstatusfilter(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[1]/button[3]")}
    get applicationcoursesfilter(){return $("//button[normalize-space()='Courses: All']")}
    get applicationconselorfilter(){return $("//button[normalize-space()='Counselors: All']")}
    get applicationview(){return $("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[6]/span[1]/button[1]/i[1]")}
    get searchofinvitee(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[1]/child::div/child::div/child::*")}
    get inviteetab(){return $("//a[contains(text(),'Invitees')]")}
    get identiryviewbutton(){return $("//div[@class='jss1 MuiBox-root css-0']//div[2]//button[3]")}
    get identityverifybutton(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/button[2]")}
    get identitydenybutton(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/button[1]")}
    get applicationview(){return $("//tbody/tr[1]/td[6]/span[1]/button[1]")}
    get identityapprove(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[10]/button[1]")}
    get identityreject(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[10]/button[2]")}
    get identityverify2ndbutton(){return $("//div[5]//button[2]")}
    get identityverify3rdbutton(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[8]/button[2]")}
    get educationapprovebutton(){return $("//button[normalize-space()='Approve']")}
    get educationrejectbutton(){return $("//button[normalize-space()='Reject']")}
    get educationtab(){return $("//span[@id='1']/child::*")}
    get healthhistoryapprovebutton(){return $("//button[normalize-space()='Approve']")}
    get healthhistoryrejectbutton(){return $("//button[normalize-space()='Reject']")}
    get healthhistorytab(){return $("//span[@id='2']/child::a")}



    async  enterFirstname(text){
        this.leadfname.setValue(text);
    }
    async enterMiddlename(text){
        this.leadmname.setValue(text);
    }
    async enterLastname(text){
        this.leadlname.setValue(text);
    }
    async enterEmail(text){
        this.leademail.setValue(text);
    }
    async enterPhonenumber(number){
        this.leadphone.setValue(number);
    }
    async enterAlternatePhonenumber(number){
        this.leadalterphone.setValue(number);
    }
    async enterMobilenumber(number){
        this.leadwhatsappnumber.setValue(number);
    }

    async enterGender(Text){
        this.leaddrpgender.setValue(Text);
        const gender=await $("//li[@id='gender-option-0']");
        await gender.click();
       

    }
    async enterDOB(Text){
        this.leadDOB.click();
        const edit=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]");
        await edit.click();
        const date=await $("//input[@placeholder='dd/mm/yyyy']");
        await date.setValue(Text);
        const ok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok.click();
       /* await console.log("yearis: "+year);
        await console.log("monthis: "+month);
        await console.log("day is : "+day);
        this.leadDOB.click();
        while(true){
            const year1= await $("/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div/div[1]/div[1]/div[2]/div").getText();
             const month1=await $("/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div").getText();
             if(year===year1 && month===month1){
                 break;
             }else{
              await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/button[1]/*[1]").click();
             }
            }
            await $("(//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div/div/button[1])[contains(text(),"+day+")]").click();
            const ok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
            await ok.click();
        */
        
    }

    async enterOccupation(text){
        this.leadoccup.setValue(text);
    }
    
    async entercommunicationLangauge(Text){
        this.leadcommlangauge.setValue((Text));
        const langauge=await $("//div[@id='communicationLanguage-option-0']");
        await langauge.click();
    }
    async enterconselor(Text){
        this.leadconselor.setValue(Text);
        const conselor=await $("//div[@id='counselor-option-0']");
        await conselor.click();
        
    }

    async enterCourse(Text){
        this.leadcourse.setValue(Text);
        const course=await $("//div[@id='course-option-0']");
        await course.click();


    }
    async enterAcademylocation(Text){
        this.leadlocation.setValue(Text);
        const location = await $("//div[@id='schoolLocation-option-0']");
        await location.click();
    }
    async enterCourselangauge(Text){
        this.leadlangauge.setValue(Text);
        const courselangauge=await $("//div[@id='courseLanguage-option-0']");
        await courselangauge.click();
        
    }

    async enterPostalcode(number){
        this.leadpostal.setValue(number);
    }
    async enterAddress1(text){
        this.leadaddress1.setValue(text);
    }
    async enterAddress2(text){
        this.leadaddress2.setValue(text);
    }
    async enterLandmark(text){
        this.leadlandmark.setValue(text);
    }
    
    async clickOnnewlead(){
        this.leadnewlead.click();
    }
    async clickOnSave(){
        this.leadsave.click();
    }
    async clickOnSearch(Text){
        this.leadsearch.setValue(Text);
    }
    async clickOnparticularlead(){
        const edit=await $("//button[@aria-label='Edit']");
        await edit.click();
    }
    async updateFirstname(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
    }
    async updatemiddlename(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
    }
    async updatelastname(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
    }
    async updateEmail(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
    }
    async updatephone(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
    }
    async updateAlternatephone(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
    }
    async updateWhataappnumber(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
    }
    async updateGender(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
        this.leaddrpgender.click();
    }
    async updateDOB(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
        this.leaddrpgender.click();
    }
    async updateOccupation(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
    }
    async updateCommlangauge(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
        this.leadcommlangauge.click();
    }
    async updateConselor(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
        this.leadconselor.click();
    }
    async updateCourse(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
        this.leadcourse.click();
    }
    async updateAcademylocation(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }

        this.leadlocation.click();
    }
    async updateCourselangauge(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
        this.leadlangauge.click();
    }
    async updatePostalcode(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
    }
    async updateAddress1(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
    }
    async updateAddress2(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
    }
    async updateLandmark(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
    }
    async clickOnupadtesave(){

        this.updateleadsave.click();
    }
    async leadsaveisclickable(){
        
        let clickable = await this.leadsave.isClickable();
        console.log(clickable); // outputs: true or false 
        if(clickable===true){
            console.log("save button working properly");
        }else{
            console.log("save button not working properly");
        }
    }
    async leadcancelisclickable(){
        
        let clickable = await this.leadcancel.isClickable();
        console.log(clickable); // outputs: true or false 
        if(clickable===true){
            console.log("cancel button working properly");
        }else{
            console.log("cancel button not working properly");
        }
    }
    async enterPrefferedCallingslot(Text1,Text2){
        this.addprefferedtime.click();
        const starttime=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/form[1]/div[2]/div[15]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await starttime.click();
        const startedit=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]");
        await startedit.click();
        const starttext=await $("//input[@placeholder='hh:mm (a|p)m']");
        await starttext.setValue(Text1);
        const startok = await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await startok.click();

        const endtime=await $("//input[@placeholder='End time']");
        await endtime.click();
        const endedit=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]");
        await endedit.click();
        const endtext=await $("//input[@placeholder='hh:mm (a|p)m']");
        await endtext.setValue(Text2);
        const endok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await endok.click();

        const savetime=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/form[1]/div[2]/div[15]/div[2]/div[1]/div[1]/div[1]/div[4]/button[1]");
        await savetime.click();
    }
    async deletecallingslot(){
        await browser.waitUntil(
            async () => (await this.deletecallingslot.isDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            }
        ))
         this.deletecallingslot.click();
    }
    async VerifyNewleadbuttonforRolewiseaccessNotexist(){
       
        await expect(this.leadnewlead).not.toBeExisting();

    }
    async VerifyNewleadbuttonforRolewiseaccessNotclickable(){
       
        await expect(this.leadnewlead).not.toBeClickable();

    }
    async VerifyleadediticonforRolewiseaccessclickable(){
       
        await expect(this.leadediticon).toBeClickable();

    }
    async VerifyleadinvitecodeiconforRolewiseaccessclickable(){
       
        await expect(this.leadinviteicon).toBeClickable();

    }
    async searchFunctionality(text){
        this.leadsearch.setValue(text);
    }
    async Coursefilterworking(text){
        this.leadcoursefilter.click();
        const search=await $("//body/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await search.setValue(text);
        await browser.pause(3000);
        const selectcourse=await $("//body/div[2]/div[1]/div[2]/div[1]/label[1]/span[1]/child::*");
        await selectcourse.click();
        await browser.pause(3000);
        const apply=await $("//body/div[2]/div[1]/div[3]/div[1]/div[1]/button[2]");
        await apply.click();
        await browser.pause(3000);
    }
    async selectCheckboxforalllead(){
        this.allleadcheckbox.click();
    }
    async clickOnDownloadsampleCSV(){
        this.leadsamplecsv.click();
    }
    async clickOnBulkimport(){
        this.leadbulkimport.click();
    }
    async VerifyUploadfilepathExist(){
        await expect(this.bulkpathfield).toBeDisplayed();

    }
    async clickOninviteleadbutton(){
        this.leadinvite.click();
    }
    async clickOndeletelead(){
        this.deleteicon.click();
    }
    async confirmDeletelead(){
        this.deleteleadconfirm.click();
    }
    async clickOnApplicationtab(){
        this.applicationtab.click();
    }
    async statusFilterworkingofApplications(text1,text2){
        this.applicationstatusfilter.click();
        const search=await $("//input[@name='searchQuery']");
        await search.setValue(text1);
        await browser.pause(3000);
        const selectstatus=await $("//span[contains(text(),'"+text2+"')]/parent::label/child::span/child::*");
        await selectstatus.click();
        await browser.pause(3000);
        const apply=await $("//button[normalize-space()='Apply']");
        await apply.click();
        await browser.pause(3000);
    }
    async coursesFilterworkingofApplications(text1,text2){
        this.applicationcoursesfilter.click();
        const search=await $("//input[@name='searchQuery']");
        await search.setValue(text1);
        await browser.pause(3000);
        const selectcourse=await $("//span[contains(text(),'"+text2+"')]/parent::label/child::span/child::*");
        await selectcourse.click();
        await browser.pause(3000);
        const apply=await $("//button[normalize-space()='Apply']");
        await apply.click();
        await browser.pause(3000);
    }
    async conselorFilterworkingofApplications(text1,text2){
        this.applicationconselorfilter.click();
        const search=await $("//input[@name='searchQuery']");
        await search.setValue(text1);
        await browser.pause(3000);
        const selectconselor=await $("//span[contains(text(),'"+text2+"')]/parent::label/child::span/child::*");
        await selectconselor.click();
        await browser.pause(3000);
        const apply=await $("//button[normalize-space()='Apply']");
        await apply.click();
        await browser.pause(3000);
    }
    async clickOnviewicon(){
        this.applicationview.click();
    }
    async clickOninviteetab(){
        this.inviteetab.click();
    }
    async searchinviteefunction(text){
        this.searchofinvitee.setValue(text);
        
    }
    async verifyleadbecomesinvitee(){
        const lead = await $("//tbody/tr[1]/td[2]/span[1]/div[1]/div[2]/div[1]/p[1]").getText();
        this.leadinviteicon.click();
        await browser.pause(3000);
        this.inviteetab.click();
        await browser.pause(3000);
        this.searchofinvitee.setValue(lead);
        await browser.pause(3000);
        const id=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/h6[1]").getText();
        const message=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/h6[1]");
        await expect(message).toHaveTextContaining(id);

    }
    async clickOneditlead(){
        this.leadediticon.click();
    }
    async Verifyidentityviewbuttonisclickable(){
       
        await expect(this.identiryviewbutton).toBeClickable();

    }
    async VerifyidentityVerifybuttonisclickable(){
       
        await expect(this.identityverifybutton).toBeClickable();

    }
    async VerifyidentityDenybuttonisclickable(){
       
        await expect(this.identitydenybutton).toBeClickable();

    }
    async clickOnapplicationsviewbutton(){
        this.applicationview.click();
    }
    async verifyidentityapprovebuttonclickable(){
        await expect(this.identityapprove).toBeClickable();
    }
    async verifyidentityapprovebuttonNotclickable(){
        await expect(this.identityapprove).not.toBeClickable();
    }
    async clickOnVerify1stdocument(){
        this.identityverifybutton.click();
    }
    async clickOnVerify2nddocument(){
        this.identityverify2ndbutton.click();
    }
    async clickOnVerify3rddocument(){
        this.identityverify3rdbutton.click();
    }
    async verifyidentityrejectbuttonclickable(){
        await expect(this.identityreject).toBeClickable();
    }
    async verifyidentityrejrctbuttonNotclickable(){
        await expect(this.identityreject).not.toBeClickable();
    }
    async clickOndenyingfirstdocument(){
        this.identitydenybutton.click();
    }
    async verifyeducationapprovebuttonclickable(){
        await expect(this.educationapprovebutton).toBeClickable();
    }
    async verifyeducationrejectbuttonclickable(){
        await expect(this.educationrejectbutton).toBeClickable();
    }
    async clickOneducationtab(){
        this.educationtab.click();
    }
    async verifyHealthhistoryapprovebuttonclickable(){
        await expect(this.healthhistoryapprovebutton).toBeClickable();
    }
    async verifyHealthhistoryrejectbuttonclickable(){
        await expect(this.healthhistoryrejectbutton).toBeClickable();
    }
    async clickOnhealthhisorytab(){
        this.healthhistorytab.click();
    }
    async clickOn1stdocumentviewbutton(){
        this.identiryviewbutton.click();
    }

    
}
module.exports = new LeadPage1();