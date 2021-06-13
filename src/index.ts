import { SharedButtonFacebook } from "./SocialMediaFacebook";
import { SharedButtonTwitter} from "./SocialMediaTwitter";
import { SharedButtonPrint} from "./ShareButtonPrint";
import { AbstractSharedButton } from "./AbstractSharedButton";
import {DomEventHandler} from './DomEventHandler'


const twitterBTN:AbstractSharedButton=new SharedButtonTwitter(new DomEventHandler(),'.btn-twitter','www.youtube.com/rodrigobranas')
twitterBTN.bind()
const facebookBTN:AbstractSharedButton=new SharedButtonFacebook(new DomEventHandler(),'.btn-facebook','www.youtube.com/rodrigobranas')
facebookBTN.bind()
const printBTN:AbstractSharedButton=new SharedButtonPrint(new DomEventHandler(),'.btn-print')
printBTN.bind()

// const twitterBTN=new SharedButtonFacebook('.btn-twitter','www.youtube.com/rodrigobranas')
