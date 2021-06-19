import { SharedLinkButton } from './AbstractLinkButton';
import { InterfaceEvent } from './interfaces/InterfaceEvent';


export class FacebookButton extends SharedLinkButton {
    url: string;
    constructor(Event:InterfaceEvent,EventName: string, url: string, target: string) {
      super(Event,EventName,target)
      this.url = url;
    }
    createLink():string{
        return `https://www.facebook.com/sharer.php?u=${this.url}`;
    }
 
  }
  
  