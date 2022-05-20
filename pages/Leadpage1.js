//const { browser } = require("protractor");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
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
    get leaddrpgender(){return  $("//input[@id='gender']/parent::div")}
    get leaddob(){return  $("//body/div[@id='root']/div[1]/div[2]/div[1]/form[1]/div[2]/div[10]/div[2]/div[1]/div[1]")}
    get leadoccup(){return  $("//input[@id='occupation']")}
    get leadcommlangauge(){return  $("//input[@id='communicationLanguage']/parent::div")}
    get leadconselor(){return  $("//input[@id='counselor']/parent::div")}
    get leadcourse(){return  $("//input[@id='course']/parent::div")}
    get leadlocation(){return  $("//input[@id='schoolLocation']/parent::div")}
    get leadlangauge(){return  $("//input[@id='courseLanguage']/parent::div")}
    get leadcountry(){return  $("//input[@id='country']")}
    get leadpostal(){return  $("//input[@id='postalCode']")}
    get leadaddress1(){return  $("//input[@id='addressLine1']")}
    get leadaddress2(){return  $("//input[@id='addressLine2']")}
    get leadlandmark(){return  $("//input[@id='landmark']")}
    get leadsave(){return  $("//button[@type='submit']")}
    get leadDOB(){return $("//input[@placeholder='What is the date of birth?']/parent::div")}

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
        this.leaddrpgender.click();
        
        if(  Text==='Male'){
         const Male= await $("//li[@id='gender-option-0']");
          await Male.click();}
          else if (Text==='Female'){
            const Female= await $("//li[@id='gender-option-1']");
             await Female.click();
          }
          else{
            const Other= await $("//li[@id='gender-option-2']");
            await Other.click();
          }
             
       
    }
    async enterDOB(year,month,day){
        await console.log("yearis: "+year);
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
        //const dob1=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[3]/div[5]/button[1]");
        //await dob1.click();
       //const ok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        //await ok.click();
        
    }

    async enterOccupation(text){
        this.leadoccup.setValue(text);
    }
    
    async entercommunicationLangauge(Text){
        this.leadcommlangauge.click();
        const english=await $("//div[@id='communicationLanguage-option-0']");
        await english.click();
    }
    async enterconselor(Text){
        this.leadconselor.click();
        if(  Text==='Pooja'){
            const pooja= await $("//div[@id='counselor-option-0']");
             await pooja.click();}
             else if (Text==='Shubham'){
               const shubham= await $("//div[@id='counselor-option-3']");
                await shubham.click();
             }
             else{
               const admin= await $("//div[@id='counselor-option-7']");
               await admin.click();
             }
    }

    async enterCourse(Text){
        this.leadcourse.click();
        if(  Text==='Manual Testing'){
            const ManualTesting= await $("//div[@id='course-option-3']");
             await ManualTesting.click();}
             else if (Text==='Automation Testing'){
               const AutomationTesting= await $("//div[@id='course-option-1']");
                await AutomationTesting.click();
             }
             else{
               const course= await $("//div[@id='course-option-0']");
               await course.click();
             }

    }
    async enterAcademylocation(Text){
        this.leadlocation.click();
        const k11Nashik = await $("//div[@id='schoolLocation-option-0']");
        await k11Nashik.click();
    }
    async enterCourselangauge(Text){
        this.leadlangauge.click();
        const english=await $("//div[@id='courseLanguage-option-0']");
        await english.click();
        
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
    
    
    
}
module.exports = new LeadPage1();