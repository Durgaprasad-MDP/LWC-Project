import {api, LightningElement } from 'lwc';

export default class nova extends LightningElement {
    @api retrivedUser;

connectedCallback(){
    debugger;
}
 
handleButtonClick() {
const selectedEvent = new CustomEvent('userclicked',{detail: this.retrivedUser.login});

this.dispatchEvent(selectedEvent);
}

}