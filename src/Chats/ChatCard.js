import { useRef } from "react";

function OpenChat({name, lastMessage}) {
    // hook for storing entered text to input before sending
    document.getElementById("currentChat").innerHTML
        = ('<div id=background>'+name+'<br></br>'+lastMessage+
        '<br></br><input id=bottomChat ref={newUserName} type="text" className="form-control" placeholder="New Message" aria-label="Message" aria-describedby="basic-addon1"></input>'
        +'</div>');
}
export default OpenChat;