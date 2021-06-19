import { InterfaceEvent} from './interfaces/InterfaceEvent';

export abstract class SharedButton{
  protected EventName: string;
  protected target: string;
  protected Event:InterfaceEvent
  constructor(Event:InterfaceEvent,EventName: string, target: string) {
    this.EventName = EventName;
    this.target = target;
    this.Event=Event
  }
  abstract createAction():any
  bind() {
    const action=this.createAction()
    this.Event.addEvent(this.EventName,this.target,action)
  }
}

