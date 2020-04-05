import {Page} from '../src/framework/page.js';

export class HomePage extends Page {
    constructor() {
        super('Home');
    }

    createElement() {
        super.createElement();
    }

    getElementString() {
        return `
        
        <a class="hello" href="app.html">Hello App</a>
        `;
    }
}