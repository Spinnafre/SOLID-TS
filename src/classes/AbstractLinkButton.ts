import { SharedButton } from './AbstractButton';
import { InterfaceEvent} from './interfaces/InterfaceEvent';

export abstract class SharedLinkButton extends SharedButton{
  constructor(Event:InterfaceEvent,EventName: string, target: string) {
    super(Event,EventName,target)
  }
  abstract createLink():string
  createAction():any{
    const link=this.createLink()
    return ()=>{
      window.open(link)
    }
  }  

}

