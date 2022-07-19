
class CountDemo{


    get parent(){
       // return $$("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 jss32 cursor-pointer MuiCard-root css-1n4rl4z']");
       return $$("//h6[@class='jss40 MuiTypography-root MuiTypography-h6 css-1ri25d']")
    }

    get childElements(){
        return this.parent.$$("//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 jss32 cursor-pointer MuiCard-root css-1n4rl4z']");
    }

    get getTextFirDiv(){
        return this.childElements.filter(element =>{
           element.isDisplayed();
        });
    }

    async getlistofstudents(){
        const studentlist = [];
        this.parent.map((element) =>
        studentlist.push(element.getText()));
        return studentlist;

    };
    async getlistofstudents1(){
        var studentlist;
        this.parent.map((element) =>
        studentlist.push(element.getText()));
        return studentlist;

    };
}
module.exports = new CountDemo();