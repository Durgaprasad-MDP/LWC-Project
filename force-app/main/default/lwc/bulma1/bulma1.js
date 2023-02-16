import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import bulma1 from '@salesforce/resourceUrl/bulma1';
export default class Bulma extends LightningElement {
    connectedCallback() {
        loadStyle(this, bulma1);
    }
}