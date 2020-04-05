

import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from '../pages/home-page.js';
import {BusinessPage} from '../pages/business-page.js';
import {PurposePage} from '../pages/purpose-page.js';


export class App extends ApplicationBase {

    constructor() {
        super('Alex site');
      
        this.addRoute('Home', new HomePage(), null);
        this.addRoute('Affärsidé', new BusinessPage(), true);
        this.addRoute('Prototyp', new PurposePage(), null);
    }
    
}

export let application = new App();
application.show($('body'));