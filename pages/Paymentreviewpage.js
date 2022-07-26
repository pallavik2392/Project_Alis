const Page = require("../test/pageobjects/page");


class Paymentreviewpage extends Page{
    
    
    get  upfrontradiobutton(){return $("//p[normalize-space()='Upfront']/parent::div/parent::div/following-sibling::div/following-sibling::div/following-sibling::div/child::span")}
    get BajajFaninceradiobutton(){return $("//p[contains(text(),'Bajaj Finance')]/parent::div/parent::div/following-sibling::div/following-sibling::div/following-sibling::div/child::span")}
    get HDFCfininceradiobutton(){return $("//p[contains(text(),'HDFC Finance')]/parent::div/parent::div/following-sibling::div/following-sibling::div/following-sibling::div/child::span")}
    get K11EMIradiobutton(){return $("//p[contains(text(),'K11 EMI')]/parent::div/parent::div/following-sibling::div/following-sibling::div/following-sibling::div/child::span")}
    get PayableWhenAbleradiobutton(){return $("//p[contains(text(),'Payable when Able')]/parent::div/parent::div/following-sibling::div/following-sibling::div/following-sibling::div/child::span")}
    get savebuttonofBillingsummary(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[8]/button[1]")}
    get Duedate(){return $("//input[@placeholder='Due Date']")}
    get Discount11radiobutton(){return $("//p[contains(text(),'Discount-1-1')]/parent::div/parent::div/following-sibling::div/following-sibling::div/following-sibling::div/following-sibling::div/child::span")}
    get Discount12radiobutton(){return $("//p[contains(text(),'Discount-1-2')]/parent::div/parent::div/following-sibling::div/following-sibling::div/following-sibling::div/following-sibling::div/child::span")}
    get addtransactioniconofpaymenttab(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[3]/button[1]")}
    get paymentmethod(){return $("//input[@id='method']")}
    get paymentamount(){return $("//input[@id='amount']")}
    get Paymentdate(){return $("//input[@placeholder='When was this payment received?']")}
    get paymentstatus(){return $("//input[@id='status']")}
    get addtransactionsavebutton(){return $("//button[normalize-space()='Save']")}
    get chequenumber(){return $("//input[@id='number']")}
    get chequedate(){return $("//input[@placeholder='Enter cheque date']")}



    async Selectpayablemode(){
        this.PayableWhenAbleradiobutton.click();
    }
    async Selectmodes(text){
        if(text==="Upfront"){
            this.upfrontradiobutton.click();
        }else if(text==="Payable when Able"){
            this.PayableWhenAbleradiobutton.click();
        }else if (text==="Bajaj Finance"){
            this.BajajFaninceradiobutton.click();
        }else if(text==="HDFC Finance"){
            this.HDFCfininceradiobutton.click();
        }
        else
            this.K11EMIradiobutton.click();

    }
    async savebuttonofbillingsummaryNotexist(){
        await expect(this.savebuttonofBillingsummary).not.toBeExisting();
    }
    async Enterduedate(text){
        this.Duedate.click();
        const edit=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]");
        await edit.click();
        const date=await $("//input[@placeholder='dd/mm/yyyy']");
        await date.setValue(text);
        const ok=$("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok.click();
    }
    async savebuttonofbillingsummaryshouldExist(){
        await expect(this.savebuttonofBillingsummary).toBeExisting();
     }
     async clickOnsaveofupdatemode(){
        this.savebuttonofBillingsummary.click();
     }
     async clickOnofdiscount1radiobutton(){
         this.Discount11radiobutton.click();
     }
     async clickOnofdiscount2radiobutton(){
        this.Discount12radiobutton.click();
    }
    async clickOnAddtransaction(){
        this.addtransactioniconofpaymenttab.click();
    }
    async enterpatmentmethod(text){
        this.paymentmethod.setValue(text);
        const method=await $("//li[@id='method-option-0']");
        await method.click();
    }
    async enterpaymentamount(text){
        this.paymentamount.setValue(text);
    }
    async Enterpaymentdate(text){
        this.Paymentdate.click();
        const edit=await $("//button[@aria-label='calendar view is open, go to text input view']//*[name()='svg']");
        await edit.click();
        const date=await $("//input[@placeholder='dd/mm/yyyy']");
        await date.setValue(text);
        await browser.pause(6000);
        const ok=await $("//div[@class='MuiDialogActions-root MuiDialogActions-spacing css-1ct48p0']/child::button/following-sibling::button");
        await ok.click();
    }
    async enterstatus(text){
        this.paymentstatus.setValue(text);
        const status=await $("//li[@id='status-option-0']");
        await status.click();
    }
    async clickonsaveoftransaction(){
        this.addtransactionsavebutton.click();
    }
    async upfrontradiobuttonisselected(){
        const button=await this.upfrontradiobutton.isSelected();
        expect(button).to.equal(true); // Chai assertion

    }
    async upfrontradiobuttonisNotselected(){
        expect(this.upfrontradiobutton).toBeSelected();
    }
}
module.exports = new Paymentreviewpage();