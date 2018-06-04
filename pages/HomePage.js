import ActionDriver from '../core/ActionDrivers.js';

class homePage extends ActionDriver{

    homePageFunc(){
        loginLink = "//a[contains(@id,'login-or-signup')]";
       ActionDriver.click(loginLink);
       
    }

}

export default new homePage();