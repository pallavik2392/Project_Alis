
class CountDemo{


    get parent(){
       // return $$("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 jss32 cursor-pointer MuiCard-root css-1n4rl4z']");
       return $$("//h6[@class='jss40 MuiTypography-root MuiTypography-h6 css-1ri25d']")
    }
    get coursesappliedparents(){return $$("//p[@class='MuiTypography-root MuiTypography-body1 css-1h7t25g']")}
    get coursesappliedchilds(){return this.coursesappliedparents.$$("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/child::p")}

    get childElements(){
        return this.parent.$$("//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 jss32 cursor-pointer MuiCard-root css-1n4rl4z']");
    }

    get getTextFirDiv(){
        return this.childElements.filter(element =>{
           element.isDisplayed();
        });
    }
    async getbilledamountlist(){
        return this.coursesappliedchilds.filter(element =>{
            element.getText();
         });
    }

    async  getstudents(){
        return this.parent.map((element) =>
        element.getText());
        console.log("line 23 of pages",studentlist)
        return studentlist;

    };
    async getcourseslist(){
        
       return this.coursesappliedparents.map((element) =>
        element.getText());
        return studentlist;

    };
}
module.exports = new CountDemo();