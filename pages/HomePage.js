import ActionDriver from '../core/ActionDrivers.js';

export class homePage extends ActionDriver{

    homePageFunc(){
        loginLink = "//a[contains(@id,'login-or-signup')]";
       click(loginLink);
       
    }

}
