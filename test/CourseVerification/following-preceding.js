const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { hdfcdownpayment } = require("../../pages/Coursespage");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");

describe("trail on following and preceding sibling",() =>{
    it("trail test", async ()=> {
        await browser.url("https://dev-alis.viasimplex.in/");
        console.log(browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(3000);
        await signinpage.enterUsername(signinData.usercred);
        await browser.pause(1000);
        await signinpage.enterPassword(signinData.passcred);
        await browser.pause(1000);
        await signinpage.clickOnSubmit();
        await browser.pause(5000);
        
        await Coursepage.clickOncourses();
        await browser.pause(5000);
        await Coursepage.clickOnNewcourse();
        await browser.pause(5000);

      
        const coursename=await $("//input[@id='name']");
        await coursename.setValue('HealthWelth31');
        const shortcode=await $("//input[@id='shortName']");
        await shortcode.setValue('HT31');
        
        const save=await $("//i[@class='flaticon-diskette']");
        await save.click();
        await browser.pause(5000);

        const payment=await $("//a[normalize-space()='Payment']");
        await payment.click();
        await browser.pause(3000);

        const Upfrontdiscount=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[2]/div[2]/div[1]/div[1]/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::div/child::input");
        await Upfrontdiscount.addValue('FLAT');
       const upfrontflat=await $("//li[@id='isAllowedToCombineWithScholarship-option-0']");
       await upfrontflat.click();
       const upfrontflatdiscountamount=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[2]/div[2]/div[1]/div[1]/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
      await upfrontflatdiscountamount.addValue('200');
        await browser.pause(5000);
       
        const bajajdiscount=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[2]/div[1]/div[1]/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::div/child::input");
        await bajajdiscount.addValue('FLAT');
        const bajajflat=await $("//li[@id='isAllowedToCombineWithScholarship-option-0']");
        await bajajflat.click();
        const bajajflatdiscountamount=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[2]/div[1]/div[1]/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
        await bajajflatdiscountamount.addValue('500');
        await browser.pause(5000);
        const bajajdownpayment=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[2]/child::div/following-sibling::div/child::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
        await bajajdownpayment.addValue('1000');
        const bajajmaxinstallment=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[2]/div[1]/following-sibling::div/child::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
        await bajajmaxinstallment.addValue('7');
       const bajajdocuments=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[2]/div[1]/following-sibling::div/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::label/following-sibling::div/child::input");
       await bajajdocuments.addValue('Pan Card');
       const bajajdocumentdropdown=await $("//li[@id='documentsRequired-option-0']");
       await bajajdocumentdropdown.click();
       await browser.pause(5000);

      
      
        const hdfcdiscount=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[3]/div[1]/div[1]/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::div/child::input");
        await hdfcdiscount.addValue('FLAT');
        const hdfcflat=await $("//li[@id='isAllowedToCombineWithScholarship-option-0']");
        await hdfcflat.click();
        await browser.pause(5000);
        const hdfcflatdiscountamount = await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[3]/child::div/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input")
        await hdfcflatdiscountamount.addValue('100');
        const hdfcdownpayment1=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[3]/child::div/following-sibling::div/child::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
        await hdfcdownpayment1.addValue('500');
        const hdfcmaxinstallment=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[3]/child::div/following-sibling::div/child::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::input");
        await hdfcmaxinstallment.addValue('5');
        const hdfcdocuments=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[3]/div[1]/following-sibling::div/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::label/following-sibling::div/child::input");
        await hdfcdocuments.addValue('Pan Card');
        const hdfcdocumentdropdown=await $("//li[@id='documentsRequired-option-0']");
        await hdfcdocumentdropdown.click();
        await browser.pause(5000);


        const K11discount=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[4]/div[1]/div[1]/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::div/child::input");
        await K11discount.addValue('FLAT');
        const K11flat=await $("//li[@id='isAllowedToCombineWithScholarship-option-0']");
        await K11flat.click();
        await browser.pause(5000);
        const K11flatdiscountamount=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[4]/div[1]/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
        await K11flatdiscountamount.addValue('500');
        const k11downpayment=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[4]/child::div/following-sibling::div/child::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
        await k11downpayment.addValue('1000');
        const k11maxinstallments=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[4]/child::div/following-sibling::div/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
        await k11maxinstallments.addValue('8');
        const k11documents=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[3]/div[4]/div[1]/following-sibling::div/child::div/following-sibling::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::label/following-sibling::div/child::input");
        await k11documents.addValue('Pan Card');
        const k11documentsdropdown=await $("//li[@id='documentsRequired-option-0']");
        await k11documentsdropdown.click();
        await browser.pause(5000);


        const Payablediscount=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[4]/div[2]/div[1]/div[1]/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::div/child::input");
        await Payablediscount.addValue('FLAT');
        const payableflat=await $("//li[@id='isAllowedToCombineWithScholarship-option-0']");
        await payableflat.click();
        const payableflatamount=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[4]/div[2]/div[1]/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::label/following-sibling::div/child::input");
        await payableflatamount.addValue('500');
        await browser.pause(5000);
       
        



    })
})