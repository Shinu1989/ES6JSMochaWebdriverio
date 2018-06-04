import ActionDriver from '../core/ActionDrivers.js';
export class UserPage extends ActionDriver{

    userPageFunc(text){
        var mysubjects = "(//h2[contains(@class,'moduleTitle')])[1]";
        compareText(mysubjects, text);
        }

    }





