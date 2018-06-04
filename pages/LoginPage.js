import ActionDriver from '../core/ActionDrivers.js';

export class LoginPage extends ActionDriver{

    loginUserPage(text1, text2){
        username ="(//form[contains(@class,'input')]/input)[1]";
        password ="(//form[contains(@class,'input')]/input)[2]";
        loginBtn ="(//button[contains(@class,'tca0ge')])[3]";
        ActionDriver.type(username, text1);
        ActionDriver.type(password, text2);
        click(loginBtn);
        browser.waitForVisible("(//h2[contains(@class,'moduleTitle')])[1]");
        
    }
}
