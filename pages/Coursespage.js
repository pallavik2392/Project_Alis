//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
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
//const { default: $, default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
const console = require("console");
const { assert } = require("console");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { browser } = require("protractor");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { $ } = require("protractor");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { browser } = require("protractor");
//const { browser } = require("protractor");
//const { browser } = require("protractor");
const Page = require("../test/pageobjects/page");

class Coursespage extends Page{
    get courses() {return $("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/a[4]")}
    get newcourse() {return $("//button[normalize-space()='New Course']")}
    get coursename(){return $("//input[@id='name']")}
    get shortcode(){return $("//input[@id='shortName']")}
    get overviewsave(){return $("//button[@type='submit']")}
    get courselocation(){return $("//input[@id='location']")}
    get langaugeofinstruction(){return $("//input[@id='language']")}
    get practicalrequirement(){return $("//input[@id='practicalRequired']")}
    get medicalrequirement(){return $("//input[@id='medicalRequirement']")}
    get modeofinstruction(){return $("//input[@id='modeOfInstruction']")}
    get savebasics(){return $("//button[@type='submit']")}
    get addtopic(){return $("//button[normalize-space()='Topic']")}
    get nameoftopic(){return $("//input[@id='topic']")}
    get theory(){return $("//input[@value='THEORY']")}
    get practical(){return $("//input[@value='PRACTICAL']")}
    get savetopic(){return $("//button[@type='submit']")}
    get addanothertopic(){return $("//i[@class='flaticon-add']")}
    get deletetopic(){return $("//button[@aria-label='Delete']")}
    get addfee(){return $("//button[normalize-space()='Fee']")}
    get feetype(){return $("//input[@id='label']")}
    get feeamount(){return $("//input[@id='value']")}
    get savefee(){return $("//button[@type='submit']")}
    get addanotherfee(){return $("//i[@class='flaticon-add']")}
    get deletefee(){return $("//i[@class='flaticon-delete']")}
    get maxcreditredeemable(){return $("//input[@id='redemption']")}
    get enablescholarship(){return $("//span[@class=' css-1ckavek']//input[@aria-label='Demo switch']")}
    get enableschemesoffers1(){return $("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[2]/div[1]/div[2]/span[1]/input[1]")}
    get anableupfront(){return $("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[2]/div[2]/div[1]/div[4]/span[1]/input[1]")}
    get upfrontdiscounttype(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[2]/div[2]/div[1]/div[1]/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::div/child::input")}
    //get upfrontflat(){return $("//li[@id='isAllowedToCombineWithScholarship-option-0']")}
    //get upfrontpercentage(){return $("//li[@id='isAllowedToCombineWithScholarship-option-1']")}
    //get upfrontflatdiscountamount(){return $("//input[@id='value']")}
    //get upfrontpercentagediscountamount(){return $("//input[@id='value']")}
    get enablepayablewhenable(){return $("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[2]/div[1]/div[4]/span[1]/input[1]")}
    get payablediscounttype(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[4]/div[2]/div[1]/div[1]/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::div/child::input")}
    get payableflat(){return $("//li[@id='isAllowedToCombineWithScholarship-option-0']")}
    get payablepercentage(){return $("//li[@id='isAllowedToCombineWithScholarship-option-1']")}
    get payablediscountamount(){return $("//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jss79 css-isbt42']//div[2]//div[2]//div[1]//div[2]//div[1]//div[1]//input[1]")}
    get payablepercentageamount(){return $("//div[@class='MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth Mui-focused MuiInputBase-formControl css-3p3yym']//input[@id='value']")}
    get enablebajajfinance(){return $("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[4]/div[2]/div[1]/div[4]/span[1]/input[1]")}
    get financediscounttype(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[2]/div[1]/div[1]/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::div/child::input")}
    get bajajflatdiscount(){return $("//li[@id='isAllowedToCombineWithScholarship-option-0']")}
    get bajajpercentage(){return $("//li[@id='isAllowedToCombineWithScholarship-option-1']")}
    get bajajflatamount(){return $("//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jss79 css-isbt42']//div[2]//div[2]//div[1]//div[2]//div[1]//div[1]//input[1]")}
    get bajajpercentageamount(){return $("//div[@class='MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth Mui-focused MuiInputBase-formControl css-3p3yym']//input[@id='value']")}
    get bajajdownpayment(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[2]/child::div/following-sibling::div/child::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input")}
    get bajajmaxinstallment(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[2]/div[1]/following-sibling::div/child::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input")}
    get bajajdocuments(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[2]/div[1]/following-sibling::div/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::label/following-sibling::div/child::input")}
    //get bajajpancard(){return $("//li[@id='documentsRequired-option-0']")}
    //get bajajadharcard(){return $("//li[@id='documentsRequired-option-1']")}
    //get bajajbankstatement(){return $("//li[@id='documentsRequired-option-2']")}
    get enablehdfc(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[3]/div[1]/div[4]/span[1]/input[1]/parent::span")}
    get hdfcdiscounttype(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[3]/div[1]/div[1]/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::div/child::input")}
    get hdfcflatdiscount(){return $("//li[@id='isAllowedToCombineWithScholarship-option-0']")}
    get hdfcpercentagediscount(){return $("//li[@id='isAllowedToCombineWithScholarship-option-1']")}
    get hdfcflatamount(){return $("//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jss79 css-isbt42']//div[2]//div[2]//div[1]//div[2]//div[1]//div[1]//input[1]")}
    get hdfcpercentageamount(){return $("//div[@class='MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth Mui-focused MuiInputBase-formControl css-3p3yym']//input[@id='value']")}
    get hdfcdownpayment(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[3]/child::div/following-sibling::div/child::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input")}
    get hdfcmaxinstallment(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[3]/child::div/following-sibling::div/child::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::input")}
    get hdfcdocument(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[3]/div[1]/following-sibling::div/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::label/following-sibling::div/child::input")}
   // get hdfcpancard(){return $("//li[@id='documentsRequired-option-0']")}
    //get hdfcadharcard(){return $("//li[@id='documentsRequired-option-1']")}
   // get hdfcbankstatement(){return $("//li[@id='documentsRequired-option-2']")}
    get enableK11(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[4]/div[1]/div[4]/span[1]/input[1]/parent::span")}
    get K11discounttype(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[4]/div[1]/div[1]/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::div/child::input")}
    get K11flatdiscount(){return $("//li[@id='isAllowedToCombineWithScholarship-option-0']")}
    get K11percentagediscount(){return $("//li[@id='isAllowedToCombineWithScholarship-option-1']")}
    get K11flatamount(){return $("//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jss79 css-isbt42']//div[2]//div[2]//div[1]//div[2]//div[1]//div[1]//input[1]")}
    get K11percentageamount(){return $("//div[@class='MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth Mui-focused MuiInputBase-formControl css-3p3yym']//input[@id='value']")}
    get K11installmentstype(){return $("//input[@id='installmentType']/parent::div")}
    get K11cheque(){return $("//li[@id='installmentType-option-0']")}
    get K11downpayment(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[4]/child::div/following-sibling::div/child::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input")}
    get K11maxinstallments(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[4]/child::div/following-sibling::div/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input")}
    get K11documents(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[4]/div[1]/following-sibling::div/child::div/following-sibling::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::label/following-sibling::div/child::input")}
    //get K11pancard(){return $("//li[@id='documentsRequired-option-0']")}
    //get K11adharcard(){return $("//li[@id='documentsRequired-option-1']")}
    //get K11bankstatement(){return $("//li[@id='documentsRequired-option-2']")}
    get savepayment(){return $("//button[@type='submit']")}
    get addbatch(){return $("//button[normalize-space()='Batch']")}
    get batchlocation(){return $("//input[@id='location']")}
    get practicallocation(){return $("//input[@id='practicalLocation']")}
    get batchlangauge(){return $("//input[@id='language']")}
    get virtualcapacity(){return $("//input[@id='virtualCapacity']")}
    get physicalcapacity(){return $("//input[@id='physicalCapacity']")}
    get batchstartdate(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[7]/div[2]/div[1]/div[1]/input[1]")}
    get batchenddate(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[8]/div[2]/div[1]/div[1]/input[1]")}
    get batchstarttime(){return $("//input[@placeholder='Batch start time?']")}
    get batchendtime(){return $("//input[@placeholder='Batch end time?']")}
    get frequency(){return $("//input[@id='frequency']")}
    get freqrepeats(){return $("//input[@id='repeats']")}
    get sunday(){return $("//button[normalize-space()='S']")}
    get monday(){return $("//button[normalize-space()='M']")}
    get tuesday(){return $("//button[normalize-space()='T']")}
    get wednesday(){return $("//button[normalize-space()='W']")}
    get thursday(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[11]/div[1]/div[1]/button[5]")}
    get friday(){return $("//button[normalize-space()='F']")}
    get saturday(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[11]/div[1]/div[1]/button[7]")}
    get saveBatch(){return $("//button[@type='submit']")}
    get searchcourse(){return $("//input[@placeholder='Search']")}
    get basictab(){return $("//a[normalize-space()='Basic']")}
    get updatebasicsave(){return $("//button[@type='submit']")}
    get cirriculumtab(){return $("//a[normalize-space()='Curriculum']")}
    get updatecurriculumsave(){return $("//button[@type='submit']")}
    get feestab(){return $("//a[normalize-space()='Fees']")}
    get updatesavefees(){return $("//button[@type='submit']")}
    get paymenttab(){return $("//a[normalize-space()='Payment']")}
    get updatepaymentsave(){return $("//button[@type='submit']")}
    get scheduletab(){return $("//a[normalize-space()='Schedule']")}
    get updatebatchsave(){return $("//button[@type='submit']")}
    get overviewcancel(){return $("//button[normalize-space()='Cancel']")}
    get deletefee(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/div[2]/div[3]/button[2]")}
    get addfeeicon(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/div[2]/div[3]/button[1]")}
    get FeesSave(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[2]/button[1]")}
    get FeesCancel(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[2]/button[2]")}
    get curriculumcancel(){return $("//button[normalize-space()='Cancel']")}
    get schedulecancel(){return $("//button[normalize-space()='Cancel']")}
    get paymentcancel(){return $("//button[normalize-space()='Cancel']")}
    get disableallscheme(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[2]/div[1]/div[2]/span[1]/input[1]")}
    get disablescholarship(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/div[1]/div[2]/span[1]/input[1]")}


    async clickOncourses(){
        this.courses.click();
    }
    async disablePayablewhenable(){
        this.enablepayablewhenable.click();
    }
    async disableBajajfinance(){
        this.enablebajajfinance.click();
    }
    async disableHDFC(){
        this.enablehdfc.click();
    }
    async disableK11EMI(){
        this.enableK11.click();
    }
    async disableUpfront(){
        this.anableupfront.click();
    }
    async disableallschemesandoffers(){
        this.disableallscheme.click();
    }
    async disableScholarshipradiobutton(){
        this.disablescholarship.click();
    }

    async clickOnNewcourse(){
        this.newcourse.click();
    }
    async enterCoursename(Text){
        this.coursename.setValue(Text);
    }
    async enterShortCode(Text){
        this.shortcode.setValue(Text);
    }
    async clickOnoverviewsave(){
        this.overviewsave.click();
    }
    async enterCourseLocation(Text){
        this.courselocation.setValue(Text);
        const location=await $("//div[@id='location-option-0']");
        await location.click(); 
    }
    async enterlangaugeofInstruction(Text){
        this.langaugeofinstruction.setValue(Text);
        const langauge =await $("//div[@id='language-option-0']");
        await langauge.click();
    }
    async enterPracticalRequirement(Text){
        this.practicalrequirement.setValue(Text);
        const practical=await $("//li[@id='practicalRequired-option-0']");
        await practical.click();
        
    }
    async enterMedicalRequirement(Text){
        this.medicalrequirement.setValue(Text);
        const medical=await $("//li[@id='medicalRequirement-option-0']");
        await medical.click();
        
    }
    async enterModesOfInstruction(Text){
        this.modeofinstruction.setValue(Text);
        const mode=await $("//li[@id='modeOfInstruction-option-0']");
        await mode.click();
       
    }
    async clickOnBasicsave(){
        this.savebasics.click();
    }
    async onlyclickaddtopic(){
        this.addtopic.click();
    }
    async onlyclickonaddtopicsave(){
        this.savetopic.click();
    }
    async addTopic(Text1,Text2){
        this.addtopic.click();
        this.nameoftopic.setValue(Text1);
        if(  Text2==='Theory'){
             this.theory.click();}
             else{
                this.practical.click();
             }
         this.savetopic.click();
    }
    async onlyclickOnaddTopic(){
        this.addtopic.click();
    }
    async clickonsavetopic(){
        this.savetopic.click();
    }
    async addFee(Text1,Text2){
        this.addfee.click();
        this.feetype.setValue(Text1);
        this.feeamount.setValue(Text2);
    }
    async onlyclickonaddfee(){
        this.addfee.click();

    }
    async addonlyfeeamount(Text){
        this.feeamount.setValue(Text);

    }
    async clickOnsaveFee(){
        this.savefee.click();

    }
    async clickOndeleteiconoffee(){
        this.deletefee.click();
    }
    async clickonaddicon(){
        this.addfeeicon.click();
    }
    async addScholorship(Text){
        this.maxcreditredeemable.setValue(Text);
    }
    async selectUpfrontmode(Text1,Text2){
        this.upfrontdiscounttype.setValue(Text1);
        const discount=await $("//li[@id='isAllowedToCombineWithScholarship-option-0']");
        await discount.click();
        const amount=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[2]/div[2]/div[1]/div[1]/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
        await amount.setValue(Text2)
        
    }
   
    async selectPayablewhenablemode(Text1,Text2){
        this.payablediscounttype.setValue(Text1);
        const discount=await $("//li[@id='isAllowedToCombineWithScholarship-option-0']");
        await discount.click();
        const amount=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[4]/div[2]/div[1]/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
        await amount.setValue(Text2)
    }
    async selectBajajfinancemode(Text1,Text2,Text3,Text4,Text5){
        this.financediscounttype.setValue(Text1);
        const discount=await $("//li[@id='isAllowedToCombineWithScholarship-option-0']");
        await discount.click();
        const amount=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[2]/div[1]/div[1]/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
        await amount.setValue(Text2)
        const bajajdownpayment=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[2]/child::div/following-sibling::div/child::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
        await bajajdownpayment.addValue(Text3);
        const bajajmaxinstallment=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[2]/div[1]/following-sibling::div/child::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
        await bajajmaxinstallment.addValue(Text4);
       const bajajdocuments=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[2]/div[1]/following-sibling::div/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::label/following-sibling::div/child::input");
       await bajajdocuments.addValue(Text5);
       const bajajdocumentdropdown=await $("//li[@id='documentsRequired-option-0']");
       await bajajdocumentdropdown.click();
       await browser.pause(5000);
          /*  this.bajajdownpayment.setValue(Text3);
            this.bajajmaxinstallment.setValue(Text4);
            this.bajajdocuments.setValue(Text5);
            const doc=await $("//li[@id='documentsRequired-option-0']")
            await doc.click();*/
    }
    async selectHdfcfinancemode(Text1,Text2,Text3,Text4,Text5){
        this.hdfcdiscounttype.setValue(Text1);
        const discount=await $("//li[@id='isAllowedToCombineWithScholarship-option-0']");
        await discount.click();
        const amount=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[3]/child::div/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
        await amount.setValue(Text2)
        const hdfcdownpayment1=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[3]/child::div/following-sibling::div/child::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
        await hdfcdownpayment1.addValue(Text3);
        const hdfcmaxinstallment=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[3]/child::div/following-sibling::div/child::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::input");
        await hdfcmaxinstallment.addValue(Text4);
        const hdfcdocuments=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[3]/div[1]/following-sibling::div/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::label/following-sibling::div/child::input");
        await hdfcdocuments.addValue(Text5);
        const hdfcdocumentdropdown=await $("//li[@id='documentsRequired-option-0']");
        await hdfcdocumentdropdown.click();
           /* this.hdfcdownpayment.setValue(Text3);
            this.hdfcmaxinstallment.setValue(Text4);
            this.hdfcdocument.setValue(Text5);
            const doc=await $("//li[@id='documentsRequired-option-0']")
            await doc.click();*/
    }
    async selectK11mode(Text1,Text2,Text3,Text4,Text5){
        this.K11discounttype.setValue(Text1);
        const discount=await $("//li[@id='isAllowedToCombineWithScholarship-option-0']");
        await discount.click();
        const amount=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[4]/div[1]/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
        await amount.setValue(Text2)
        const k11downpayment=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[4]/child::div/following-sibling::div/child::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
        await k11downpayment.addValue(Text3);
        const k11maxinstallments=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[4]/child::div/following-sibling::div/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
        await k11maxinstallments.addValue(Text4);
        const k11documents=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[4]/div[1]/following-sibling::div/child::div/following-sibling::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::label/following-sibling::div/child::input");
        await k11documents.addValue(Text5);
        const k11documentsdropdown=await $("//li[@id='documentsRequired-option-0']");
        await k11documentsdropdown.click();
        await browser.pause(5000);
            /*this.K11installmentstype.click();
            this.K11cheque.click();
            this.K11downpayment.setValue(Text3);
            this.K11maxinstallments.setValue(Text4);
            this.K11documents.setValue(Text5);
            const doc=await $("//li[@id='documentsRequired-option-0']")
            await doc.click();*/
    }
    async clickOnsavepayment(){
        this.savepayment.click();
    }
    async clickOnAddBatch(){
        this.addbatch.click();
    }
    async selectBatchlocation(Text){
        this.batchlocation.setValue(Text);
        const location=await $("//div[@id='location-option-0']");
        await location.click();
    }
    async selectPracticalLocation(Text){
        this.practicallocation.setValue(Text);
        const location=await $("//div[@id='practicalLocation-option-0']");
        await location.click();
    }
    async selectBatchlangauge(Text){
        this.batchlangauge.setValue(Text);
        const langauge=await $("//div[@id='language-option-0']");
        await langauge.click();
    }
    async addVertualcapacity(Text){
        this.virtualcapacity.setValue(Text);
    }
    async addPhysicalcapacity(Text){
        this.physicalcapacity.setValue(Text);
    }
    async enterBatchstartdate(Text){
        
        this.batchstartdate.click();
        const edit=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]");
        await edit.click();
        const date=await $("//input[@placeholder='dd/mm/yyyy']");
        await date.setValue(Text);
        const ok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok.click();
    }
    async enterBatchenddate(Text){
        this.batchenddate.click();
        const edit=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]");
        await edit.click();
        const date=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await date.setValue(Text)
        const ok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok.click();
    }
    async enterBatchstarttime(Text){
        this.batchstarttime.click();
        const edit=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]");
        await edit.click();
        const time=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await time.addValue(Text);
        const ok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok.click();
    }
    async enterBatchendtime(Text){
        this.batchendtime.click();
        const edit=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]");
        await edit.click();
        const time=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await time.setValue(Text);
        const ok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok.click();
    }
    async setFrequency(Text1,Text2){
        this.frequency.setValue(Text1);
        const select=await $("//li[@id='frequency-option-0']");
        await select.click();
        if(Text1==='Every Month'){
            const month=await $("//input[@id='repeats']");

            

            /*await month.waitUntil(async function () {
                return (await this.isDisplayed())
            }, {
                timeout: 10000,
                timeoutMsg: 'expected text to be different after 5s'
            });
            //await month.waitForDisplayed({ timeout: 9000 });
            //const month=await $("//p[normalize-space()='Select weeks']");
            */
            await month.setValue(Text2);
            const week=await $("//li[@id='repeats-option-0']");
            await week.click();
        }
    }
    async setfrequencytoUpdate(Text1,Text2){
        this.frequency.setValue(Text1);
        const select=await $("//li[@id='frequency-option-0']");
        await select.click();
        const month=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[10]/div[1]/div[2]/child::div/following-sibling::div/child::p");
        await month.doubleClick();
        await browser.pause(4000);
        if(Text2==='Week 1'){
            const week=await $("//li[@id='repeats-option-0']");
            await week.click();
        }
        else if(Text2==='Week 2'){
            const week=await $("//li[@id='repeats-option-1']");
            await week.click();
        }
        else if(Text2==='Week 3'){
            const week=await $("//li[@id='repeats-option-2']");
            await week.click();
        }else{
            const week=await $("//li[@id='repeats-option-3']");
            await week.click();
        }

    }
    async selectSunday(){
        this.sunday.click();
    }
    async selectMonday(){
        this.monday.click();
    }
    async selectTuesday(){
        this.tuesday.click();
    }
    async selectWednesday(){
        this.wednesday.click();
    }
    async selectThursday(){
        this.thursday.click();
    }
    async selectFriday(){
        this.friday.click();
    }
    async selectSaturday(){
        this.saturday.click();
    }
    async clickOnsavebatch(){
        this.saveBatch.click();
    }
    async searchCourse(Text){
        this.searchcourse.setValue(Text);
       /* await browser.waitUntil(
            async () => (Text.waitForDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            }))*/
        
    }
    async clickonsearchedcourse(Text){
        const search=await $("//h5[@aria-label='"+Text+"']");
        await search.waitForDisplayed();
        await search.click();
    }
    async clickOnparticularcourse(Text){
         const course=await $("//h5[normalize-space()='"+Text+"']");
         await course.scrollIntoView();
         await course.click();
        
    }
    async updateCoursename(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
    }
    async updateCourseshortcode(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
    }
    async updateCourselocation(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
        this.courselocation.click();
    }
    async updateLangaugeofinstruction(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
        this.langaugeofinstruction.click();
    }
    async updatePracticalrequirement(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
        this.practicalrequirement.click();
    }
    async updateMedicalrequirement(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
        this.medicalrequirement.click();
    }
    async updateModesofinstruction(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
        this.modeofinstruction.click();
    }
    async updatesavebasics(){
        this.updatebasicsave.click();
    }
    async clickOncirriculum(){
        this.cirriculumtab.click();
    }
    async updateTopic(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
    }
    async clearradiobuttonfortopic(Text){
        const radio=await $("//span[normalize-space()='"+Text+"']");
        await radio.click();
    }
    async updateFeetype(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
    }
    async updateFeeamount(Text){
        const name=await $("//p[contains(text(),'"+Text+"')]");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
    }
    async updateCreditsredeemable(Text){
        const name=await $("//p[contains(text(),'"+Text+"')]");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
    }
    async updateBatchlocation(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
        this.batchlocation.click();
    }
    async updatePracticallocation(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
        this.practicallocation.click();
    }
    async updateBatchlangauge(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
        this.batchlangauge.click();
    }
    async updateVirtualcapacity(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
        
    }
    async updatePhysicalcapacity(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
        
    }
    async updateBatchstartdate(Text1,Text2){
        const name=await $("//p[normalize-space()='"+Text1+"']");
        await name.doubleClick();
        const edit=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]");
        await edit.click();
        const textfield=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await textfield.doubleClick();
        const len= Text1.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
        const time=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await time.addValue(Text2);
        const ok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok.click();

    }
    async updateBatchenddate(Text1,Text2){
        const name=await $("//p[normalize-space()='"+Text1+"']");
        await name.doubleClick();
        const edit=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]");
        await edit.click();
        const textfield=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await textfield.doubleClick();
        const len= Text1.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
        const time=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await time.addValue(Text2);
        const ok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok.click();

    }
    async clickOnBasictab(){
          this.basictab.click();
    }
    async updateClickoncirriculumsave(){
          this.updatecurriculumsave.click();
    }
    async clickOnfeestab(){
        this.feestab.click();
    }
    async updatesaveFees(){
        this.updatesavefees.click();
    }
    async clickOnpayment(){
        this.paymenttab.click();
    }
    async clickOnupdatepaymentsave(){
        this.updatepaymentsave.click();
    }
    async clickOnscheduletab(){
        this.scheduletab.click();
    }
    async clickOnbatchedit(){
        const edit=await $("//i[@class='flaticon-edit-1']");
        await edit.click();
    }
    async updateBatchtime(Text1,Text2,Text3,Text4){
        const name=await $("//p[normalize-space()='"+Text1+"']");
        await name.doubleClick();
        const starttime=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[9]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]/parent::div");
        await starttime.doubleClick();
        const time1=await $("//input[@placeholder='Batch start time?']");
        await time1.click();
        const edit=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]");
        await edit.click();
        const textfield=await $ ("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await textfield.doubleClick();
        const len= Text1.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
        const time=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await time.addValue(Text2);
        const ok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok.click();
    }
    async updateBatchendtime(Text1,Text2,Text3){
        //batch endtime edit start here
       // const name=await $("//p[normalize-space()='"+Text1+"']");
        //await name.doubleClick();
        const endtime=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[9]/div[2]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await endtime.click();
        //const time2=await $ ("//input[@placeholder='Batch end time?']");
       // await time2.click();
        const edit1=await $("//body/div[2]/div[3]/child::div/child::div/child::div/child::div/child::div/child::div/following-sibling::div/following-sibling::button/child::*/child::*");
       /* browser.executeScript("document.querySelector('#svg').click()")

       
        /*browser.waitUntil(function(){
          return edit1.isDisplayed()===true
      },6000, 'element not displayed after given time')
        //await browser.executeScript("document.querySelector(edit1).click()");
        await browser.execute(()=>{
            edit1.click();
        })
        await edit1.click();    

        
        //await edit1.waitForExist({ timeout: 5000 });
        await edit1.waitUntil(async function () {
            return (await this.isClickable) 
        }, {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        });
        //await edit1.waitForClickable({ timeout: 5000 });
        //console.log(await edit1.isFocused()); // outputs: false
        //await edit1.waitForDisplayed({ timeout: 3000 });
       // await edit1.waitForEnabled({ timeout: 3000 });
        //assert.equal(true, edit1.isEnabled());
       //let isDisplayed = await edit1.isDisplayed();
    console.log(isDisplayed); 
    */
        await edit1.click();
        const textfield1=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await textfield1.doubleClick();
        const len1= Text1.length;
        for(let i=len1;i>=0;i--){
        await browser.keys('Backspace');
        }
        const time3=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
        await time3.addValue(Text3);
        const ok1=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok1.click();
    }
    async updateFrequency(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        const len= Text.length;
        for(let i=len;i>=0;i--){
        await browser.keys('Backspace');
        }
        this.frequency.click();
    }
    async clickOnupdatebatchsave(){
        this.updatebatchsave.click();
    }
    async courseoverviewsaveisclickable(){
        await expect(this.overviewsave).toBeClickable();

    }
    async courseoverviewcancelisclickable(){
        await expect(this.overviewcancel).toBeClickable();

       
    }
    async courseFeessaveisclickable(){
        await expect(this.FeesSave).toBeClickable()

        /*let clickable = await this.FeesSave.isClickable();
        console.log(clickable); // outputs: true or false 
        if(clickable===true){
            console.log("cancel button working properly");
        }else{
            console.log("cancel button not working properly");
        }*/
    }
    async courseFeescancelisclickable(){
        await expect(this.FeesCancel).toBeClickable();
    }
   /* async Verifyerror(){
        const message=await $("//p[@id='modeOfInstruction-helper-text']");
        await message.waitForDisplayed();
    }*/
    async courseCurriculumsaveisclickable(){
        await expect(this.savetopic).toBeClickable();
    }
    async courseCurriculumcancelisclickable(){
        await expect(this.curriculumcancel).toBeClickable();
    }
    async scheduleAddbatchbuttonclickable(){
        await expect(this.addbatch).toBeClickable();
    }
    async courseSchedulesaveisclickable(){
        await expect(this.saveBatch).toBeClickable();
    }
    async courseSchedulecancelisclickable(){
        await expect(this.schedulecancel).toBeClickable();
    }
    async onlyBajajflatdiscountamount(Text){
        this.bajajflatamount.addValue(Text);
    }
    async coursePaymentsaveisclickable(){
        await expect(this.savepayment).toBeClickable();
    }
    async coursePaymentCancelisclickable(){
        await expect(this.paymentcancel).toBeClickable();
    }
    async VerifyNewcoursebuttonforRolewiseaccessNotexist(){
       
        await expect(this.newcourse).not.toBeExisting();

    }
    async VerifyNewcoursebuttonforRolewiseaccessNotclickable(){
       
        await expect(this.newcourse).not.toBeClickable();

    }


}
module.exports = new Coursespage();