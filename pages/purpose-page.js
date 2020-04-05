import {Page} from '../src/framework/page.js';


export class PurposePage extends Page {
    constructor() {
        super('Prototyp');
    }

    createElement() {
        super.createElement();   

    }

    getElementString() {
        return `
        <div class="container">
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Prototyp</h2>
            </div>
            <div class="mdl-card__actions mdl-card--border">
            </div>
            <div class="mdl-card__supporting-text">
            <p>
            Det jag kommer att bygga i kursen är själva appen som är kopplad till nyckelbrickan. Eftersom att jag inte kommer
            kunna bygga en programmeringsbar nyckelbricka så blir det endast appen. Man ska kunna logga in, se sin profil och kunna
            lägga till tillgängliga nycklar till sin egen nyckelbricka. Man kan också ha flera nycklar per användare.
            </p>
            </div>           
            </div>
            </div>
        </div>
        `;
    }
}