//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
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
    get upfrontdiscounttype(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/input[1]/parent::div")}
    get upfrontflat(){return $("//li[@id='isAllowedToCombineWithScholarship-option-0']")}
    get upfrontpercentage(){return $("//li[@id='isAllowedToCombineWithScholarship-option-1']")}
    get upfrontflatdiscountamount(){return $("//input[@id='value']")}
    get upfrontpercentagediscountamount(){return $("//input[@id='value']")}
    get enablepayablewhenable(){return $("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[2]/div[1]/div[4]/span[1]/input[1]")}
    get payablediscounttype(){return $("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)")}
    get payableflat(){return $("//li[@id='isAllowedToCombineWithScholarship-option-0']")}
    get payablepercentage(){return $("//li[@id='isAllowedToCombineWithScholarship-option-1']")}
    get payablediscountamount(){return $("//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jss79 css-isbt42']//div[2]//div[2]//div[1]//div[2]//div[1]//div[1]//input[1]")}
    get payablepercentageamount(){return $("//div[@class='MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth Mui-focused MuiInputBase-formControl css-3p3yym']//input[@id='value']")}
    get enablebajajfinance(){return $("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[4]/div[2]/div[1]/div[4]/span[1]/input[1]")}
    get financediscounttype(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[4]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/input[1]/parent::div")}
    get bajajflatdiscount(){return $("//li[@id='isAllowedToCombineWithScholarship-option-0']")}
    get bajajpercentage(){return $("//li[@id='isAllowedToCombineWithScholarship-option-1']")}
    get bajajflatamount(){return $("//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jss79 css-isbt42']//div[2]//div[2]//div[1]//div[2]//div[1]//div[1]//input[1]")}
    get bajajpercentageamount(){return $("//div[@class='MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth Mui-focused MuiInputBase-formControl css-3p3yym']//input[@id='value']")}
    get bajajdownpayment(){return $("//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jss79 css-isbt42']//div[2]//div[2]//div[1]//div[2]//div[1]//div[1]//input[1]")}
    get bajajmaxinstallment(){return $("//div[@class='MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth Mui-focused MuiInputBase-formControl css-3p3yym']//input[@id='Max Installments']")}
    get bajajdocuments(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[4]/div[2]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/input[1]/parent::div")}
    get bajajpancard(){return $("//li[@id='documentsRequired-option-0']")}
    get bajajadharcard(){return $("//li[@id='documentsRequired-option-1']")}
    get bajajbankstatement(){return $("//li[@id='documentsRequired-option-2']")}
    get enablehdfc(){return $("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[4]/div[3]/div[1]/div[4]/span[1]/input[1]")}
    get hdfcdiscounttype(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[4]/div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/input[1]/parent::div")}
    get hdfcflatdiscount(){return $("//li[@id='isAllowedToCombineWithScholarship-option-0']")}
    get hdfcpercentagediscount(){return $("//li[@id='isAllowedToCombineWithScholarship-option-1']")}
    get hdfcflatamount(){return $("//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jss79 css-isbt42']//div[2]//div[2]//div[1]//div[2]//div[1]//div[1]//input[1]")}
    get hdfcpercentageamount(){return $("//div[@class='MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth Mui-focused MuiInputBase-formControl css-3p3yym']//input[@id='value']")}
    get hdfcdownpayment(){return $("//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jss79 css-isbt42']//div[2]//div[2]//div[1]//div[2]//div[1]//div[1]//input[1]")}
    get hdfcmaxinstallment(){return $("//div[@class='MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth Mui-focused MuiInputBase-formControl css-3p3yym']//input[@id='Max Installments']")}
    get hdfcdocument(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[4]/div[3]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/input[1]/parent::div")}
    get hdfcpancard(){return $("//li[@id='documentsRequired-option-0']")}
    get hdfcadharcard(){return $("//li[@id='documentsRequired-option-1']")}
    get hdfcbankstatement(){return $("//li[@id='documentsRequired-option-2']")}
    get enableK11(){return $("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[4]/div[4]/div[1]/div[4]/span[1]/input[1]")}
    get K11discounttype(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[4]/div[4]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/input[1]/parent::div")}
    get K11flatdiscount(){return $("//li[@id='isAllowedToCombineWithScholarship-option-0']")}
    get K11percentagediscount(){return $("//li[@id='isAllowedToCombineWithScholarship-option-1']")}
    get K11flatamount(){return $("//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jss79 css-isbt42']//div[2]//div[2]//div[1]//div[2]//div[1]//div[1]//input[1]")}
    get K11percentageamount(){return $("//div[@class='MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth Mui-focused MuiInputBase-formControl css-3p3yym']//input[@id='value']")}
    get K11installmentstype(){return $("//input[@id='installmentType']/parent::div")}
    get K11cheque(){return $("//li[@id='installmentType-option-0']")}
    get K11downpayment(){return $("//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 jss79 css-isbt42']//div[2]//div[2]//div[1]//div[2]//div[1]//div[1]//input[1]")}
    get K11maxinstallments(){return $("//div[@class='MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth Mui-focused MuiInputBase-formControl css-3p3yym']//input[@id='Max Installments']")}
    get K11documents(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[4]/div[4]/div[2]/div[4]/div[2]/div[1]/div[1]/div[1]/input[1]/parent::div")}
    get K11pancard(){return $("//li[@id='documentsRequired-option-0']")}
    get K11adharcard(){return $("//li[@id='documentsRequired-option-1']")}
    get K11bankstatement(){return $("//li[@id='documentsRequired-option-2']")}
    get savepayment(){return $("//button[@type='submit']")}
    get addbatch(){return $("//button[normalize-space()='Batch']")}
    get batchlocation(){return $("//input[@id='location']/parent::div")}
    get practicallocation(){return $("//input[@id='practicalLocation']/parent::div")}
    get batchlangauge(){return $("//input[@id='language']/parent::div")}
    get virtualcapacity(){return $("//input[@id='virtualCapacity']/parent::div")}
    get physicalcapacity(){return $("//input[@id='physicalCapacity']/parent::div")}
    get batchstartdate(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[7]/div[2]/div[1]/div[1]/input[1]")}
    get batchenddate(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[8]/div[2]/div[1]/div[1]/input[1]")}
    get batchstarttime(){return $("//input[@placeholder='Batch start time?']")}
    get batchendtime(){return $("//input[@placeholder='Batch end time?']")}
    get frequency(){return $("//input[@id='frequency']/parent::div")}
    get freqrepeats(){return $("//input[@id='repeats']/parent::div")}
    get sunday(){return $("//button[normalize-space()='S']")}
    get monday(){return $("//button[normalize-space()='M']")}
    get tuesday(){return $("//button[normalize-space()='T']")}
    get wednesday(){return $("//button[normalize-space()='W']")}
    get thurday(){return $("//div[@class='jss34']//button[1]")}
    get friday(){return $("//button[normalize-space()='F']")}
    get saturday(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[11]/div[1]/div[1]/button[7]")}

    async clickOncourses(){
        this.courses.click();
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
        this.courselocation.click();
        const Nashik=await $("//div[@id='location-option-0']");
        await Nashik.click(); 
    }
    async enterlangaugeofInstruction(Text){
        this.langaugeofinstruction.click();
        const english =await $("//div[@id='language-option-0']");
        await english.click();
    }
    async enterPracticalRequirement(Text){
        this.practicalrequirement.click();
        if(  Text==='Yes'){
            const yes= await $("//li[@id='practicalRequired-option-0']");
             await yes.click();}
             else{
               const no= await $("//li[@id='practicalRequired-option-1']");
               await no.click();
             }
    }
    async enterMedicalRequirement(Text){
        this.medicalrequirement.click();
        if(  Text==='Yes'){
            const yes= await $("//li[@id='medicalRequirement-option-0']");
             await yes.click();}
             else{
               const no= await $("//li[@id='medicalRequirement-option-1']");
               await no.click();
             }
    }
    async enterModesOfInstruction(Text){
        this.modeofinstruction.click();
        if(  Text==='Virtual'){
            const virtual= await $("//li[@id='modeOfInstruction-option-0']");
             await virtual.click();}
             else{
               const physical= await $("//li[@id='modeOfInstruction-option-1']");
               await physical.click();
             }
    }
    async clickOnBasicsave(){
        this.savebasics.click();
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
    async addFee(Text1,Text2){
        this.addfee.click();
        this.feetype.setValue(Text1);
        this.feeamount.setValue(Text2);
    }
    async clickOnsaveFee(){
        this.savefee.click();

    }
    async addScholorship(Text){
        this.maxcreditredeemable.setValue(Text);
    }
    async selectUpfrontmode(Text1,Text2){
        this.upfrontdiscounttype.click();
        if(  Text1==='FLAT'){
            this.upfrontflat.click();
            this.upfrontflatdiscountamount.setValue(Text2)
        }
            else{
               this.upfrontpercentage.click();
               this.upfrontpercentagediscountamount.setValue(Text2)
            }
    }
    async selectPayablewhenablemode(Text1,Text2){
        this.payablediscounttype.click();
        if(  Text1==='FLAT'){
            this.payableflat.click();
            this.payablediscountamount.setValue(Text2)
        }
            else{
               this.payablepercentage.click();
               this.payablepercentageamount.setValue(Text2)
            }
    }
    async selectBajajfinancemode(Text1,Text2,Text3,Text4,Text5){
        this.financediscounttype.click();
        if(  Text1==='FLAT'){
            this.bajajflatdiscount.click();
            this.bajajflatamount.setValue(Text2)
        }
            else{
               this.bajajpercentage.click();
               this.bajajpercentageamount.setValue(Text2)
            }
            this.bajajdownpayment.setValue(Text3);
            this.bajajmaxinstallment.setValue(Text4);
            this.bajajdocuments.click();
            if(Text5==='Pan Card'){
                this.bajajpancard.click();
            }else if(Text5==='Aadhaar Card'){
                this.bajajadharcard.click();
            }else{
                this.bajajbankstatement.click();
            }
    }
    async selectHdfcfinancemode(Text1,Text2,Text3,Text4,Text5){
        this.hdfcdiscounttype.click();
        if(  Text1==='FLAT'){
            this.hdfcflatdiscount.click();
            this.hdfcflatamount.setValue(Text2)
        }
            else{
               this.hdfcpercentagediscount.click();
               this.hdfcpercentageamount.setValue(Text2)
            }
            this.hdfcdownpayment.setValue(Text3);
            this.hdfcmaxinstallment.setValue(Text4);
            this.hdfcdocument.click();
            if(Text5==='Pan Card'){
                this.hdfcpancard.click();
            }else if(Text5==='Aadhaar Card'){
                this.hdfcadharcard.click();
            }else{
                this.hdfcbankstatement.click();
            }
    }
    async selectK11mode(Text1,Text2,Text3,Text4,Text5){
        this.K11discounttype.click();
        if(  Text1==='FLAT'){
            this.K11flatdiscount.click();
            this.K11flatamount.setValue(Text2)
        }
            else{
               this.K11percentagediscount.click();
               this.K11percentageamount.setValue(Text2)
            }
            this.K11installmentstype.click();
            this.K11cheque.click();
            this.K11downpayment.setValue(Text3);
            this.K11maxinstallments.setValue(Text4);
            this.K11documents.click();
            if(Text5==='Pan Card'){
                this.K11pancard.click();
            }else if(Text5==='Aadhaar Card'){
                this.K11adharcard.click();
            }else{
                this.K11bankstatement.click();
            }
    }
    async clickOnsavepayment(){
        this.savepayment.click();
    }
    

    

}
module.exports = new Coursespage();