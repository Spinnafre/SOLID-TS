import { EventHandler } from "./EventHandler"

export class DomEventHandler implements EventHandler{
    addEventListenerToClass(clazz:string,event:string,fn:any){
        const elements:any=document.querySelectorAll(clazz) 
        for(const el of elements){
            el.addEventListener(event,fn)
        }
    }
}