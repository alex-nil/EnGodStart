import {BaseElement} from './base-element.js';

export class Footer extends BaseElement {
    constructor(title) {
        super();
        this.title = title;
    }


    getElementString() {
        return `
        <footer class="mdl-mini-footer">
        <div class="mdl-mini-footer__left-section">
          <div class="mdl-logo">En God Start</div>
          
        </div>
      </footer>
        `
    }
}