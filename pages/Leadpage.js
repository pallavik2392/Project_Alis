
//const { path } = require("chromedriver");
//const { default: $ } = require("webdriverio/build/commands/browser/$");

//const Page = require("../test/pageobjects/page");
const Page = require('./page');

class LeadPage extends  Page{

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
    get leadcommlangauge(){return  $("//input[@id='communicationLanguage']")}
    get leadconselor(){return  $("//input[@id='counselor']")}
    get leadcourse(){return  $("//input[@id='course']")}
    get leadlocation(){return  $("//input[@id='schoolLocation']")}
    get leadlangauge(){return  $("//input[@id='courseLanguage']")}
    get leadcountry(){return  $("//input[@id='country']")}
    get leadpostal(){return  $("//input[@id='postalCode']")}
    get leadaddress1(){return  $("//input[@id='addressLine1']")}
    get leadaddress2(){return  $("//input[@id='addressLine2']")}
    get leadlandmark(){return  $("//input[@id='addressLine1']")}
    get leadsave(){return  $("//button[@type='submit']")}
    
    
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

    async enterGender(){
       
         let drp=this.leaddrpgender.click();
         
           let genderName=$$("//input[@id='gender']/parent::div/child::*")
           let genderName=$$("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[9]/div[2]/div[1]/div[1]/div[1]/input[1]")

       // for(var i=0;i<genderName.length;i++){
           //console.log(genderName[i].getText()+"***")
           // if(genderName[i].getText()=="Female"){
            //   genderName[i].click()
            }
       // }
    
    
    


    async enterOccupation(text){
        this.leadoccup.setValue(text);
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
    
    
    
}
module.exports = new LeadPage();