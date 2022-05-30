//const { default: $ } = require('webdriverio/build/commands/browser/$');
//const { default: $ } = require('webdriverio/build/commands/browser/$');
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { $ } = require("protractor");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { $ } = require("protractor");
//const { $ } = require("protractor");
//const { $ } = require("protractor");
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
    get staffroles(){return $("//input[@id='roles']")}
    get staffdesignation(){return $("//input[@id='designation']")}
    get staffdepartment(){return $("//input[@id='department']")}
    get teachingstaff(){return $("//input[@id='isTeachingStaff']")}
    get staffofficelocation(){return $("//input[@id='officeLocation']")}
    get staffsave(){return $("//button[@type='submit']")}
    get search(){return $("//input[@placeholder='Search']")}
    get particularstaff(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]")}

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
        this.staffroles.setValue(Text);
        const role=await $("//div[@id='roles-option-0']");
        await role.click();
    }

    async enterDesignation(Text){
        this.staffdesignation.setValue(Text);
        const designation=await $("//div[@id='designation-option-0']");
        await designation.click();
    }

    async enterDepartment(Text){
        this.staffdepartment.setValue(Text);
        const department=await $("//div[@id='department-option-0']");
        await department.click();
    }

    async enterTeachingStaff(Text){
        this.teachingstaff.setValue(Text);
        const staff=await $("//li[@id='isTeachingStaff-option-0']");
        await staff.click();
    }

    async enterOfficeLocation(Text){
        this.staffofficelocation.setValue(Text);
        const location=await $("//div[@id='officeLocation-option-0']")
        await location.click();
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
    async searchbyname(Text){
        this.search.setValue(Text);
    }
    async clickOnParticularstaff(){
        this.particularstaff.click();
    }
    async updateFirstname(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');

    }
    async updatelastname(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');

    }
    async updatemiddlename(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');

    }
    async updatePersonelphone(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');

    }
    async updateWorkphone(Text){
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
    

}
module.exports = new Staffpage();