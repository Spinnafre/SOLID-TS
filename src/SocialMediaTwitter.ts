import { EventHandler } from "./EventHandler"
import {AbstractLinkShareButton} from './AbstractLinkSharedButton'
export class SharedButtonTwitter extends AbstractLinkShareButton{
    constructor(EventHandler:EventHandler ,className:string,url:string){
        super(EventHandler,className,url)
    }
    createLink():string{
        return `https://twitter.com/intent/tweet?url=${this.url}`
    }
}