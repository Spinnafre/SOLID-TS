import { InterfaceEvent } from './../classes/interfaces/InterfaceEvent';

export class EventHandler implements InterfaceEvent{
  addEvent(event:string,target:string,fn:any) {
    const buttons = document.querySelectorAll(target) as NodeList;
    for (const b of buttons) {
      b.addEventListener(event, fn);
    }
  }
}
