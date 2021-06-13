import {AbstractSharedButton} from './AbstractSharedButton'
import { EventHandler } from './EventHandler'

export abstract class AbstractLinkShareButton extends AbstractSharedButton{
    url:string
    constructor(EventHandler:EventHandler ,className:string,url:string){
        super(EventHandler,className)
        this.url=url
    }
    abstract createLink():string
    createAction():any{
        const link=this.createLink()
        return ()=>window.open(link)
    }

}