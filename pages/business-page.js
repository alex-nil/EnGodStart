import {Page} from '../src/framework/page.js';


export class BusinessPage extends Page {
    constructor() {
        super('Affärsidé');
    }

    createElement() {
        super.createElement();   

    }

    getElementString() {
        return `
        <div class="container">
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Affärsidé</h2>
            </div>
            <div class="mdl-card__actions mdl-card--border">
            </div>
            <div class="mdl-card__supporting-text">
            <p>Min affärsidé går ut på att göra elektroniska nyckelbrickor, som du kan ha fler än 1 nyckel kopplad till.
            Man ska sedan kunna kontrollera, eller hålla koll på sin nyckel med hjälp av en app.
            Anledningen till att jag valde att göra en elektronisk nyckelbricka är för att jag själv har en
            stor och klumpig nyckelbricka. Eftersom att samhället modarniseras mer och mer så känns det bara naturligt att 
            införa digitala nycklar till alla.
            </p>
            </div>           
            </div>
            </div>
        </div>
        `;
    }
}