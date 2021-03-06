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
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
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
    get updatesave(){return $("//button[@type='submit']")}
    get staffcancel(){return $("//button[normalize-space()='Cancel']")}
    get searchstaff(){return $("//input[@placeholder='Search']")}
    get stafflocation(){return $("//button[normalize-space()='Locations: All']")}
    get locationsearch(){return $("//body/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]")}



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
    async updateRoles(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
        this.staffroles.click();
    }
    async updateDesignation(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
        this.staffdesignation.click();
    }
    async updateDepartment(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
        this.staffdepartment.click();
    }
    async updateTeachingstaff(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
        this.teachingstaff.click();
    }
    async updateOfficelocation(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
        this.staffofficelocation.click();
    }
    async clickOnupdatesave(){
        this.updatesave.click();
    }
    async staffsaveisclickable(){
        await expect(this.staffsave).toBeClickable();
    }
    
    async staffcancelisclickable(){

        await expect(this.staffcancel).toBeClickable();

    }
    async Newstaffisclickable(){

        await expect(this.neawstaff).toBeClickable();

    }
    async VerifyNewstaffbuttonforRolewiseaccessNotclickable(){
       
        await expect(this.neawstaff).not.toBeClickable();
    }

    async VerifyNewstaffebuttonforRolewiseaccessNotexist(){
   
        await expect(this.neawstaff).not.toBeExisting();

    }
    async enterdatainsearchfield(text){
        this.searchstaff.setValue(text);
    }
    async verifystaffexist(text){
        const staffname=await ("//h5[contains(text(),'"+text+"')]");
        await expect(staffname).toBeDisplayedInViewport();
    }
    async searchstaffbylocation(text){
        this.stafflocation.click();
        this.locationsearch.setValue(text);
        const location=await $("//body/div[2]/div[1]/div[2]/div[1]/child::label/child::span/child::*");
        await location.click();
        const apply=await $("//button[normalize-space()='Apply']");
        await apply.click();
    }
    

}
module.exports = new Staffpage();