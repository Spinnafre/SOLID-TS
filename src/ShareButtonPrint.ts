import { EventHandler } from "./EventHandler"
import {AbstractSharedButton} from './AbstractSharedButton'
export class SharedButtonPrint extends AbstractSharedButton{
    constructor(EventHandler:EventHandler ,className:string){
        super(EventHandler,className)
    }
    createAction(){
        return ()=>window.print()
    }
}