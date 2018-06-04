import { expect }  from "chai";
class ActionDriver{
 openUrl(){
        browser.url('/');
    };

     type(loc, text){
        browser.setValue(loc,text);
    };

    click(loc){
        browser.click(loc);
    };

   compareText(loc, text){
       var text1 = browser.getText(loc);
    chai.expect(text1).equal.to.text;

    };
};

export default new ActionDriver();