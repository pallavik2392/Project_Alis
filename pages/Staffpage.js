//const { default: $ } = require('webdriverio/build/commands/browser/$');
//const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require("../test/pageobjects/page");

class Staffpage extends Page{

    get staff() {return $("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/a[3]")}
    get neawstaff(){return $("//button[normalize-space()='New Staff']")}
    get stafffirstname(){return $("//input[@id='firstName']")}
    get staffmidlename(){return $ ("//input[@id='middleName']")}
    get stafflastname(){return $("//input[@id='lastName']")}
    get persphonenumber(){return $("//input[@id='mobile']")}
    get workphonenumber(){return $("//input[@id='workPhone']")}
    get staffemailid(){return $("//input[@id='email']")}
    get staffroles(){return $("//input[@id='roles']/parent::div")}
    get staffdesignation(){return $("//input[@id='designation']/parent::div")}
    get staffdepartment(){return $("//input[@id='department']/parent::div")}
    get teachingstaff(){return $("//input[@id='isTeachingStaff']/parent::div")}
    get staffofficelocation(){return $("//input[@id='officeLocation']/parent::div")}
    get staffsave(){return $("//button[@type='submit']")}

    async  enterFirstname(text){
        this.stafffirstname.setValue(text);
    }
    async enterMiddlename(text){
        this.staffmidlename.setValue(text);
    }
    async enterLastname(text){
        this.stafflastname.setValue(text);
    }
    async enterPhonenumber(number){
        this.persphonenumber.setValue(number);
    }
    async enterworkPhonenumber(number){
        this.workphonenumber.setValue(number);
    }
    async enterEmail(text){
        this.staffemailid.setValue(text);
    }
    async enterStaffRole(Text){
        this.staffroles.click();
        
        if(  Text==='Executive'){
         const executive= await $("//div[@id='roles-option-0']");
          await executive.click();}
          else if (Text==='Junior'){
            const junior= await $("//div[@id='roles-option-1']");
             await junior.click();
          }
          else{
            const adminisrator= await $("//div[@id='roles-option-2']");
            await adminisrator.click();
          }
    }
    async enterDesignation(Text){
        this.staffdesignation.click();
        
        if(  Text==='Senior Master Trainer'){
         const mastertrainer= await $("//div[@id='designation-option-0']");
          await mastertrainer.click();}
          else if (Text==='Faculty'){
            const faculty= await $("//div[@id='designation-option-9']");
             await faculty.click();
          }
          else{
            const trainie= await $("//div[@id='designation-option-2']");
            await trainie.click();
          }
    }
    async enterDepartment(Text){
        this.staffdepartment.click();
        
        if(  Text==='Accounts'){
         const accounts= await $("//div[@id='department-option-0']");
          await accounts.click();}
          else if (Text==='Administration'){
            const administration= await $("//div[@id='department-option-1']");
             await administration.click();
          }
          else{
            const audit= await $("//div[@id='department-option-4']");
            await audit.click();
          }
    }
    async enterTeachingStaff(Text){
        this.teachingstaff.click();
        
        if(  Text==='Yes'){
         const yes= await $("//li[@id='isTeachingStaff-option-0']");
          await yes.click();}
          else{
            const no= await $("//li[@id='isTeachingStaff-option-1']");
            await no.click();
          }
    }
    async enterOfficeLocation(Text){
        this.staffofficelocation.click();
        const K11Nashik=await $("//div[@id='officeLocation-option-0']")
        await K11Nashik.click();
    }
    async clickOnstaff(){
        this.staff.click();
    }
    async clickOnAddstaff(){
        this.neawstaff.click();
    }
    async clickOnSaveStaff(){
        this.staffsave.click();
    }

}
module.exports = new Staffpage();