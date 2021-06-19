
import { SharedButton } from './AbstractButton';
import { InterfaceEvent } from './interfaces/InterfaceEvent';


export class PrintButton extends SharedButton {
    constructor(Event:InterfaceEvent,EventName: string, target: string) {
      super(Event,EventName,target)
    }
    createAction():any{
        return ()=>{
            const butons=document.querySelector(".container-button") as HTMLDivElement
            butons.style.display="none"
            window.print()
            butons.style.display="block"
        }
    }
 
  }
  
  