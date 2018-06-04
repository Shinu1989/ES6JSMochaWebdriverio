import ActionDriver from '../core/ActionDrivers.js';
class UserPage extends ActionDriver{

    userPageFunc(text){
        var mysubjects = "(//h2[contains(@class,'moduleTitle')])[1]";
        ActionDriver.compareText(mysubjects, text);
        }

    }
export default new UserPage();




