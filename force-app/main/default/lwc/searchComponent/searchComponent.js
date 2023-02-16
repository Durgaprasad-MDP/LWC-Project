import { LightningElement,wire} from 'lwc';
// Import message service features required for publishing and the message channel
import { publish, MessageContext } from 'lightning/messageService';

import searchMessage from '@salesforce/messageChannel/gitSearchMessagingChannel__c';

export default class  GitSearchBox extends LightningElement {



 
@wire(MessageContext)
messageContext;
 
handleClick(event)
{
 let inputValue = this.template.querySelectorAll("Lightning-input")[0].value;
console.log('gameengine time',inputValue);
 
const payload = { isTermValid: true,searchTerm:inputValue };

        publish(this.messageContext, searchMessage , payload);
}
}