//const { default: $ } = require("webdriverio/build/commands/browser/$");
const Page = require("../test/pageobjects/page");

class PaymentPage extends Page{

    get maximumcreditredemable(){return $("//input[@id='redemption']")}
    get Upfrontdiscounttype(){return $("//p[contains(text(),'Upfront')]/parent::div/parent::div/parent::div/child::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::div/child::input")}
    get Upfrontdiscountamount(){return $("//p[contains(text(),'Upfront')]/parent::div/parent::div/parent::div/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::input")}
    get Upfrontradiobutton(){return $("//p[contains(text(),'Upfront')]/parent::div/parent::div/parent::div/child::div/following-sibling::div/following-sibling::div/following-sibling::div/child::span/child::input")}
    get Bajajfinancediscounttype(){return $("//p[contains(text(),'Bajaj Finance')]/parent::div/parent::div/parent::div/parent::div/child::div/child::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::div/child::input")}
    get Bajajfinancediscountamount(){return $("//p[contains(text(),'Bajaj Finance')]/parent::div/parent::div/parent::div/parent::div/child::div/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::input")}
    get Bajajfinancedownpayment(){return $("//p[contains(text(),'Bajaj Finance')]/parent::div/parent::div/parent::div/parent::div/child::div/following-sibling::div/child::div/child::div/child::div/child::div/child::input")}
    get Bajajfinancemaximuminstallment(){return $("//p[contains(text(),'Bajaj Finance')]/parent::div/parent::div/parent::div/parent::div/child::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::div/child::input")}
    get Bajajfinancedocuments(){return $("//p[contains(text(),'Bajaj Finance')]/parent::div/parent::div/parent::div/parent::div/child::div/following-sibling::div/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::div/child::input")}
    get Bajajfinanceradiobutton(){return $("//p[contains(text(),'Bajaj Finance')]/parent::div/parent::div/parent::div/parent::div/child::div/child::div/following-sibling::div/following-sibling::div/following-sibling::div/child::span/child::input")}
    get HDFCdiscounttype(){return $("//p[contains(text(),'HDFC Finance')]/parent::div/parent::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::div/child::input")}
    get HDFCdicountamount(){return $("//p[contains(text(),'HDFC Finance')]/parent::div/parent::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::input")}
    get HDFCdownpayment(){return $("//p[contains(text(),'HDFC Finance')]/parent::div/parent::div/parent::div/following-sibling::div/child::div/child::div/following-sibling::div/child::div/child::div/child::input")}
    get HDFCMaxinstallments(){return $("//p[contains(text(),'HDFC Finance')]/parent::div/parent::div/parent::div/following-sibling::div/child::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::input")}
    get HDFCdocuments(){return $("//p[contains(text(),'HDFC Finance')]/parent::div/parent::div/parent::div/following-sibling::div/child::div/following-sibling::div/following-sibling::div/child::div/child::div/child::div/child::div/child::input")}
    get HDFCradiobutton(){return $("//p[contains(text(),'HDFC Finance')]/parent::div/parent::div/parent::div/child::div/following-sibling::div/following-sibling::div/following-sibling::div/child::span/child::input")}
    get K11EMIdiscounttype(){return $("//p[contains(text(),'K11 EMI')]/parent::div/parent::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::div/child::input")}
    get K11EMIdiscountamount(){return $("//p[contains(text(),'K11 EMI')]/parent::div/parent::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::input")}
    get K11EMIdownpayment(){return $("//p[contains(text(),'K11 EMI')]/parent::div/parent::div/parent::div/following-sibling::div/child::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::input")}
    get K11EMImaxinstallments(){return $("//p[contains(text(),'K11 EMI')]/parent::div/parent::div/parent::div/following-sibling::div/child::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::input")}
    get K11EMIdocuments(){return $("//p[contains(text(),'K11 EMI')]/parent::div/parent::div/parent::div/following-sibling::div/child::div/following-sibling::div/following-sibling::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::div/child::input")}
    get K11EMIradiobutton(){return $("//p[contains(text(),'K11 EMI')]/parent::div/parent::div/parent::div/child::div/following-sibling::div/following-sibling::div/following-sibling::div/child::span/child::input")}
    get Payablewhenablediscounttype(){return $("//p[contains(text(),'Payable when Able')]/parent::div/parent::div/following-sibling::div/child::div/following-sibling::div/child::div/child::div/child::div/child::input")}
    get Payablewhenablediscountamount(){return $("//p[contains(text(),'Payable when Able')]/parent::div/parent::div/following-sibling::div/following-sibling::div/child::div/child::div/child::div/child::input")}
    get PayablewhenableRadiobutton(){return $("//p[contains(text(),'Payable when Able')]/parent::div/parent::div/following-sibling::div/following-sibling::div/following-sibling::div/child::span/child::input")}
    get savebuttonofBillingsummary(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[8]/button[1]")}
    get Duedate(){return $("//input[@placeholder='Due Date']")}

    async Selectpaymentmodetoreviewapplication(text){
        if(text==="Payable when Able"){
        this.PayablewhenableRadiobutton.click();
        }else if(text==="K11EMI"){
            this.K11EMIradiobutton.click();
        }else if(text==="HDFC Finance"){
            this.HDFCradiobutton.click();
        }else if(text==="Bajaj Finance"){
            this.Bajajfinanceradiobutton.click();
        } else(text==="Upfront")
            this.Upfrontradiobutton.click();
        
    }
    async savebuttonofbillingsummaryNotexist(){
        await expect(this.savebuttonofBillingsummary).not.toBeExisting();
    }
    async savebuttonofbillingsummaryshouldExist(){
       await expect(this.savebuttonofBillingsummary).toBeExisting();
    }
    async Enterduedate(text){
        this.Duedate.setValue(text);
    }

}
module.exports = new PaymentPage();