//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { $ } = require("protractor");
const Page = require("../test/pageobjects/page");

class Studentpage extends Page{
    get studentmenu(){return $("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/a[2]/div[1]/i[1]")}
    get searchfunction(){return $("//input[@placeholder='Search']")}
    get particularstudent(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]")}
    get supporttab(){return $("//a[normalize-space()='Support']")}
    get paymenttab(){return $("//a[contains(text(),'Payment')]")}
    get scholarshiptab(){return $("//h4[contains(text(),'SCHOLARSHIP')]")}
    get addscholarship(){return $("//i[@class='flaticon-add']")}
    get scholarshipcourse(){return $("//input[@id='course']")}
    get dateearned(){return $("//input[@placeholder='Date Earned']")}
    get benefitsEarned(){return $("//input[@placeholder='Benefits Earned']")}
    get scholarshipsave(){return $("//button[@type='submit']")}
    get attendancetab(){return $("//a[contains(text(),'Attendance')]")}
    get attendancacourse(){return $("//input[@id='course']")}
    get attendancebatch(){return $("//input[@id='batch']")}
    get attendancetopic(){return $("//input[@id='topic']")}
    get attendancedate(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[9]/div[1]/div[2]/div[1]/div[1]/input[1]")}
    get attendancesave(){return $("//button[@type='button']")}
    get particularstudentattendanceradiobutton(){return $("//tbody/tr[1]/td[5]/span[1]/div[1]/span[1]/input[1]")}
    get particularstudentsattendancetab(){return $("//a[contains(text(),'Attendance')]")}
    get attendancecard(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]")}



    async clickOnstudentMenu(){
        this.studentmenu.click();
    }
    async searchstudent(Text){
        this.searchfunction.setValue(Text);
    }
    async clickOnparticularstudent(){
        this.particularstudent.click();
    }
    async clickOnsupport(){
        this.supporttab.click();
    }
    async clickOnpayment(){
        this.paymenttab.click();
    }
    async clickOnscholarship(){
        this.scholarshiptab.click();
    }
    async clickOnAddscholarshipicon(){
        this.addscholarship.click();
    }
    async addCourseforscholarship(text){
        this.scholarshipcourse.setValue(text);
        const coursename=await $("//li[@id='course-option-0']");
        await coursename.click();
    }
    async addDateforscholarship(text){
        this.dateearned.click();
        const edit=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]");
        await edit.click();
        const date=await $("//input[@placeholder='dd/mm/yyyy']");
        await date.setValue(text);
        const ok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok.click();
    }
    async addBenefitsforscholarship(text){
        this.benefitsEarned.setValue(text);
    }
    async clickOnscholarshipsave(){
        this.scholarshipsave.click();
    }
    async clickOnAttendancetab(){
        this.attendancetab.click();
    }
    async addcourseforattendance(text){
        this.attendancacourse.setValue(text);
        const course=await $("//div[@id='course-option-0']");
        await course.click();
    }
    async addbatchforattendance(text){
        this.attendancebatch.setValue(text);
        const batch=await $("//div[@id='batch-option-0']");
        await batch.click();
    }
    async addtopicforattendance(text){
        this.attendancetopic.setValue(text);
        const topic=await $("//div[@id='topic-option-0']");
        await topic.click();
    }
    async setDateforattendance(text){
        this.attendancedate.click();
        const edit =await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]");
        await edit.click();
        const filldate=await $("//input[@placeholder='dd/mm/yyyy']");
        await filldate.setValue(text);
        const ok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok.click();
    }
    async saveattendance(){
        this.attendancesave.click();
    }
    async radiobuttoninattendancerecordNotclickable(){
        await expect(this.particularstudentattendanceradiobutton).not.toBeClickable();
    }
    async clickOnparticularstudentsattendancetab(){
        this.particularstudentsattendancetab.click();
    }
    async clickOnattendancecard(){
        this.attendancecard.click();
    }
    async searchstudentbynumber(text){
        this.searchfunction.setValue(text);
    }


}
module.exports = new Studentpage();