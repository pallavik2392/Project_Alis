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
    get particularstudentspaymenttab(){return $("//a[contains(text(),'Payment')]")}
    get wallettab(){return $("//h4[contains(text(),'WALLET')]")}
    get addtowalletbutton(){return $("//button[normalize-space()='Add to Wallet']")}
    get invoicesbutton(){return $("//button[normalize-space()='Invoices']")}
    get updatemode(){return $("//button[normalize-space()='Update Mode']")}
    get canceladmission(){return $("//button[normalize-space()='Cancel Admission']")}
    get coursestab(){return $("//h4[contains(text(),'COURSES')]")}
    get addtowalletreason(){return $("//textarea[@id='reason']")}
    get addtowalletsave(){return $("//button[@type='submit']")}
    get Walletcredittobeissued(){return $("//input[@id='amount']")}
    get invoicesviewbillingsummary(){return $("//button[@aria-label='View Billing Summary']")}
    get invoicesdownloadinvoice(){return $("//button[@aria-label='Download Invoice']")}
    get invoicesviewtransactions(){return $("//i[@class='flaticon-view']")}
    get invoicescanceladmission(){return $("//button[@aria-label='Cancel Invoice']//i[@class='flaticon-x-mark']")}
    get addinvoice(){return $("//i[@class='flaticon-add']")}
    get addinvoiceproduct(){return $("//input[@id='name']")}
    get addinvoiceproductrate(){return $("//input[@id='rate']")}
    get productsave(){return $("//button[@type='submit']")}
    get productaddanother(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[2]/div[3]/button[1]/i[1]")}
    get productdelete(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[2]/div[3]/button[2]/i[1]")}
    get scholarshipcreditreturn(){return $("//input[@id='scholarship']")}
    get canceladmissionbutton(){return $("//button[normalize-space()='Cancel Admission']")}
    get cancellationreason(){return $("//textarea[@id='reason']")}
    get canceladmissionsave(){return $("//button[@type='submit']")}
    get addticket(){return $("//i[@class='flaticon-add']")}
    get supportcourse(){return $("//input[@id='course']")}
    get supportsubject(){return $("//input[@id='subject']")}
    get department(){return $("//input[@id='department']")}
    get supportcategory(){return $("//input[@id='category']")}
    get supportsubcategory(){return $("//input[@id='subcategory']")}
    get supporttags(){return $("//input[@id='tags']")}
    get supportnextdate(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/form[1]/div[1]/div[9]/div[1]/div[2]/div[1]/div[1]/input[1]")}
    get supportstarttime(){return $("//input[@placeholder='Start time']")}
    get supportendtime(){return $("//input[@placeholder='End time']")}
    get supportstatus(){return $("//input[@id='status']")}
    get supportpriority(){return $("//input[@id='priority']")}
    get supportchangenote(){return $("//textarea[@id='note']")}
    get supportsave(){return $("//button[@type='submit']")}
    get scholarshipcreditreturn(){return $("//input[@id='scholarship']")}



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
    async clickonparticularstudentswallettab(){
        this.wallettab.click();
    }
    async clickOnparticularstudentscoursestab(){
        this.coursestab.click();
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
    async clickOnparticularstudentspaymenttab(){
        this.particularstudentspaymenttab.click();
    }
    async coursesaddtowalletisclickable(){
        await expect(this.addtowalletbutton).toBeClickable();
    }
    async coursesinvoicesisclickable(){
        await expect(this.invoicesbutton).toBeClickable();
    }
    async coursesupdatemodeisclickable(){
        await expect(this.updatemode).toBeClickable();
    }
    async coursescanceladmissionisclickable(){
        await expect(this.canceladmission).toBeClickable();
    }
    async entertextinaddtowalletreasonfield(text){
        this.addtowalletreason.setValue(text);
    }
    async clickOnaddtowallet(){
        this.addtowalletbutton.click();
    }
    async clickOnaddtowalletsave(){
        this.addtowalletsave.click();
    }
    async enteramountinwalletcreditissued(text){
        this.Walletcredittobeissued.setValue(text);
    }
    async clickOninvoicesbutton(){
        this.invoicesbutton.click();
    }
    async clickOninvoicesviewbillingsummary(){
        this.invoicesviewbillingsummary.click();
    }
    async clickOninvoicesdownloadinvoice(){
        this.invoicesdownloadinvoice.click();
    }
    async clickOninvoicesViewtransaction(){
        this.invoicesviewtransactions.click();
    }
    async clickOninvoicescanceladmissions(){
        this.invoicescanceladmission.click();
    }
    async invoicesviewtransactionisclickable(){
        await expect(this.invoicesviewtransactions).toBeClickable();
    }
    async invoicescanceladmissionisclickable(){
        await expect(this.invoicescanceladmission).toBeClickable();
    }
    async clickOnaddinvoice(){
        this.addinvoice.click();
    } 
    async addproducttoinvoice(text){
        this.addinvoiceproduct.setValue(text);
    }
    async addproductratetoinvoice(text){
        this.addinvoiceproductrate.setValue(text);
    }
    async clickOnsaveofinvoice(){
        this.productsave.click();
    }
    async productaddanotherisclickable(){
        await expect(this.productaddanother).toBeClickable();
    }
    async productdeleteisclickable(){
        await expect(this.productdelete).toBeClickable();
    }
    async clickOncanceladmission(){
        this.invoicescanceladmission.click();
    }
    async enterscholarshipcreditamount(text){
        this.scholarshipcreditreturn.setValue(text);
    }
    async entercancellationreason(text){
        this.cancellationreason.setValue(text)
    }
    async clickOncanceladmissionsave(){
        this.canceladmissionsave.click();
    }
    async clickonaddticket(){
        this.addticket.click();
    }
    async entercoursetofollowup(text){
        this.supportcourse.setValue(text);
        const name=await $("//div[@id='course-option-0']");
        await name.click();
    }
    async entersubjecttofollowup(text){
        this.supportsubject.setValue(text);
        const name=await $("//div[@id='subject-option-0']");
        await name.click();
    }
    async enterdepartmenttofollowup(text){
        this.department.setValue(text);
        const name=await $("//div[@id='department-option-0']");
        await name.click();
    }
    async entercategorytofollowup(text){
        this.supportcategory.setValue(text);
        const name=await $("//div[@id='category-option-0']");
        await name.click();
    }
    async entersubcategorytofollowup(text){
        this.supportsubcategory.setValue(text);
        const name=await $("//div[@id='subcategory-option-0']");
        await name.click();
    }
    async entertagtofollowup(text){
        this.supporttags.setValue(text);
        const name=await $("//div[@id='tags-option-0']");
        await name.click();
    }
    async enternextdatetoffffollowup(text){
        this.supportnextdate.click();
        const edit=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]");
        await edit.click();
        const date=await $("//input[@placeholder='dd/mm/yyyy']");
        await date.setValue(text);
        const ok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok.click();
    }
    async enterstarttimetofollowup(text){
        this.supportstarttime.click();
        const edit=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]");
        await edit.click();
        const starttime=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await starttime.setValue(text);
        const ok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok.click();
    }
    async enterendtime(text){
        this.supportendtime.click();
        const edit =await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]");
        await edit.click();
        const endtime=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await endtime.setValue(text);
        const ok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok.click();
    }
    async enterstatustofollowup(text){
        this.supportstatus.click();
        const open=await $("//div[@id='status-option-0']");
        await open.click();

    }
    async enterprioritytofollowup(text){
        this.supportpriority.setValue(text);
        const name=await $("//div[@id='priority-option-0']");
        await name.click();

    }
    async enterchangenotetofollowup(text){
        this.supportchangenote.setValue(text);
    }
    async clickOnsavetofollowup(){
        this.supportsave.click();
    }
    async clickOncanceladmissionofcoursestab(){
        this.canceladmission.click();
    }
    async enteramountinscholarshipcreditreturn(text){
        this.scholarshipcreditreturn.setValue(text);
    }
    async clickOncanceladmission(){
        this.canceladmissionbutton.click();
    }
    async selectparticularcoursefromstudentspaymenttab(text){
        const course=await $("//h4[contains(text(),'"+text+"')]/parent::div/parent::div/parent::div/preceding-sibling::div/parent::div/following-sibling::div/child::div/child::button/following-sibling::button/following-sibling::button/following-sibling::button/following-sibling::button")
        await course.click();
    }
    async canceladmissionshouldnotexist(text){
        const course=await $("//h4[contains(text(),'"+text+"')]/parent::div/parent::div/parent::div/preceding-sibling::div/parent::div/following-sibling::div/child::div/child::button/following-sibling::button/following-sibling::button/following-sibling::button/following-sibling::button")
        await expect(course).not.toBeExisting();


    }



}
module.exports = new Studentpage();