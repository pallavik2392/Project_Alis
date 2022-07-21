const { default: $ } = require("webdriverio/build/commands/browser/$");
const Page = require("../test/pageobjects/page");

class Paymentpage extends Page{
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
    
}