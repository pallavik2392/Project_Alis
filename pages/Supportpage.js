//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
const Page = require("../test/pageobjects/page");
const path = require('path');

class Supportpage extends Page{
    get support() {return $("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/a[5]/div[1]/i[1]/parent::div")}
    get newticket() {return $("//button[normalize-space()='NEW TICKET']")}
    get student(){return $("//input[@id='student']")}
    get course(){return $("//input[@id='course']")}
    get subject(){return $("//input[@id='subject']")}
    get department(){return $("//input[@id='department']")}
    get category(){return $("//input[@id='category']")}
    get subcategory(){return $("//input[@id='subcategory']")}
    get tag(){return $("//input[@id='tags']")}
    get nextdate(){return $("//input[@placeholder='Next Date']")}
    get starttime(){return $("//input[@placeholder='Start time']")}
    get endtime(){return $("//input[@placeholder='End time']")}
    get status(){return $("//input[@id='status']/parent::div")}
    get priority(){return $("//input[@id='priority']")}
    get changenote(){return $("//textarea[@id='note']")}
    get saveticket(){return $("//button[@type='submit']")}
    get getticket(){return $("//button[normalize-space()='GET TICKET']")}
    get next(){return $("//a[contains(text(),'Next')]")}
    get history(){return $("//a[contains(text(),'History')]")}
    get coursesfilter(){return $("//button[normalize-space()='Course: All']")}
    get locationsfilter(){return $("//button[normalize-space()='Locations: All']")}
    get departmentfilter(){return $("//button[normalize-space()='Department: All']")}
    get categoryfilter(){return $("//button[normalize-space()='Category: All']")}
    get subcategoryfilter(){return $("//button[normalize-space()='Sub-category: All']")}
    get tagsfilter(){return $("//button[normalize-space()='Tag: All']")}
    get priorityfilter(){return $("//button[normalize-space()='Priority: All']")}





    async clickOnsupport(){
        this.support.click();
    }
    async clickOnnewticket(){
        this.newticket.click();
    }
    async enterStudent(Text){
        this.student.setValue(Text);
        const name=await $("//div[@id='student-option-0']");
        await name.click();
    }
    async enterCourse(Text){
        this.course.setValue(Text);
        const name=await $("//div[@id='course-option-0']");
        await name.click();
    }
    async enterSubject(Text){
        this.subject.setValue(Text);
        const name=await $("//div[@id='subject-option-0']");
        await name.click();
    }
    async enterDepartment(Text){
        this.department.setValue(Text);
        const name=await $("//div[@id='department-option-0']");
        await name.click();
    }
    async enterCategory(Text){
        this.category.setValue(Text);
        const name=await $("//div[@id='category-option-0']");
        await name.click();
    }
    async enterSubcategory(Text){
        this.subcategory.setValue(Text);
        const name=await $("//div[@id='subcategory-option-0']");
        await name.click();
    }
    async enterTags(Text){
        this.tag.setValue(Text);
        const name=await $("//div[@id='tags-option-0']")
        await name.click();
    }
    async enterNextdate(Text){
        this.nextdate.click();
        const edit=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]")
        await edit.click();
        const date=await $("//input[@placeholder='dd/mm/yyyy']");
        await date.setValue(Text);
        const ok= await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok.click();
    }
    async enterStarttime(Text){
        this.starttime.click();
        const edit=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]");
        await edit.click();
        const time=await $("//input[@placeholder='hh:mm (a|p)m']");
        await time.addValue(Text);
        const ok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok.click();
    }
    async enterEndtime(Text){
        this.endtime.click();
        const edit=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]");
        await edit.click();
        const time=await $("//input[@placeholder='hh:mm (a|p)m']");
        await time.addValue(Text);
        const ok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok.click();
    }
    async enterStatus(){
        this.status.click();
        const open=await $("//div[@id='status-option-0']");
        await open.click();
    }
    async enterPriority(Text){
        this.priority.setValue(Text);
        const name=await $("//div[@id='priority-option-0']");
        await name.click();
    }
    async enterChangenote(Text){
        this.changenote.setValue(Text);
    }
    async clickpOnsaveticket(){
        this.saveticket.click();
    }
    async searchparticularTicket(Text){
        const ticket=await $("")
    }
    async uploadfile(){
        const uploadfile=await $("//p[contains(text(),'Drag and drop files here, or click to select files')]");
        //await uploadfile.click();
       // const filepath = path.join(__dirname,'../Alis/ScreenshotsforAlis/wdio.png');
        const filepath='/path/desktop/demoproject/Alis/ScreenshotsforAlis/wdio.png';
       const remoteFilePath = browser.uploadFile(filepath);
       await uploadfile.addValue(remoteFilePath);
       
    }
    async VerifyNewticketbuttonforRolewiseaccessNotexist(){
       
        await expect(this.newticket).not.toBeExisting();

    }
    async VerifyNewticketbuttonforRolewiseaccessNotclickable(){
       
        await expect(this.newticket).not.toBeClickable();

    }
    async clickOnGetticket(){
        this.getticket.click();
    }
    async clickOnnexttab(){
        this.next.click();
    }
    async Verifycoursesfilter(text){
        this.coursesfilter.click();
        const search=await $("//body/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await search.setValue(text);
        const course=await $("//body/div[2]/div[1]/div[2]/div[1]/label[1]/span[1]/child::*");
        await course.click();
        const apply=await $("//button[normalize-space()='Apply']");
        await apply.click();
    }
    async Verifylocationsfilter(text){
        this.locationsfilter.click();
        const search=await $("//body/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await search.setValue(text);
        const location=await $("//body/div[2]/div[1]/div[2]/div[1]/child::label/child::span/child::*");
        await location.click();
        const apply=await $("//button[normalize-space()='Apply']");
        await apply.click();
    }
    async Verifydepartmentfilter(text){
        this.departmentfilter.click();
        const search=await $("//body/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await search.setValue(text);
        const department=await $("//body/div[2]/div[1]/div[2]/div[1]/child::label/child::span/child::*");
        await department.click();
        const apply=await $("//button[normalize-space()='Apply']");
        await apply.click();
    }
    async Verifycategoryfilter(text){
        this.categoryfilter.click();
        const search=await $("//body/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await search.setValue(text);
        const category=await $("//body/div[2]/div[1]/div[2]/div[1]/child::label/child::span/child::*");
        await category.click();
        const apply=await $("//button[normalize-space()='Apply']");
        await apply.click();
    }
    async Verifysubcategoryfilter(text){
        this.subcategoryfilter.click();
        const search=await $("//body/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await search.setValue(text);
        const subcategory=await $("//body/div[2]/div[1]/div[2]/div[1]/child::label/child::span");
        await subcategory.click();
        const apply=await $("//button[normalize-space()='Apply']");
        await apply.click();
    }
    async Verifytagsfilter(text){
        this.tagsfilter.click();
        const search=await $("//body/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await search.setValue(text);
        const tags=await $("//body/div[2]/div[1]/div[2]/div[1]/child::label/child::span");
        await tags.click();
        const apply=await $("//button[normalize-space()='Apply']");
        await apply.click();
    }
    async Verifypriorityfilter(text){
        this.priorityfilter.click();
        if(text==='Low'){
            const low1=await $("//body/div[2]/div[1]/div[1]/div[1]/div[2]/label[1]/span[1]/child::*");
            await low1.click();
        }else if(text==='Medium'){
            const medium1=await $("//body/div[2]/div[1]/div[1]/div[1]/div[3]/label[1]/span[1]/child::*");
            await medium1.click();
        }else{
            const high1=await $("//body/div[2]/div[1]/div[1]/div[1]/div[4]/label[1]/span[1]/child::*");
            await high1.click();
        }
        const apply=await $("//button[normalize-space()='Apply']");
        await apply.click();
    }
    


}
module.exports = new Supportpage();