
import { FacebookButton } from "./classes/Facebook"
import { PrintButton } from "./classes/PrintButton"
import { EventHandler } from "./services/EventListener"


const fcb=new FacebookButton(new EventHandler(),'click','https://github.com/Spinnafre','.btn-facebook')
const printBtn=new PrintButton(new EventHandler(),'click','.btn-print')
fcb.bind()
printBtn.bind()
