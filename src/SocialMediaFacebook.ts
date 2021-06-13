import { EventHandler } from "./EventHandler"
import {AbstractLinkShareButton} from './AbstractLinkSharedButton'
export class SharedButtonFacebook extends AbstractLinkShareButton{
    constructor(EventHandler:EventHandler ,className:string,url:string){
        super(EventHandler,className,url)
    }
    createLink():string{
        return `https://www.facebook.com/sharer.php?u=${this.url}`
    }
}