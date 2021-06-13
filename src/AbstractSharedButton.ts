import { EventHandler } from "./EventHandler"
//Princípio do Open/Closed - Aberto para extesão e fechado para mudanças
//Toda nova rede social que for implementada no programa, irá ter que cumprir o contrato
export abstract class AbstractSharedButton{
    protected className:string
    public addEvent:EventHandler
    constructor(EventHandler:EventHandler,className:string){
        this.className=className
        // Recebe qualquer tipo de evento que cumpra com a interface
        this.addEvent=EventHandler
    }
    
    abstract createAction():any

    bind():void{
        let action=this.createAction()
        this.addEvent.addEventListenerToClass(this.className,'click',action)
        
    }
}