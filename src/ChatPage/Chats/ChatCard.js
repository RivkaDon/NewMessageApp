import { useRef } from "react";

function OpenChat({ name, lastMessage }) {
    document.getElementById("nameOfChatContact").innerHTML = name;
    document.getElementById("currentChat").innerHTML
        = ('<div id="background">' + lastMessage +
            '<button id="attachButton"></button><input id="bottomChat"></input>'
            + '<button id="sendButton"></button></div>');
    // attach button
    const attach = document.createElement("button");
    attach.addEventListener("click", () => console.log("hello"));
    attach.innerText = "Attach";
    attach.setAttribute("id", "attachButton");
    attach.setAttribute("class", "myButton");
    attach.setAttributeNS("class", "myButton", "id", "attachButton", "type", "button", "className", "btn btn-primary");
    document.getElementById("attachButton").replaceWith(attach);
    // input
    const input = document.createElement("input");
    input.setAttribute("id", "bottomChat");
    input.type = "text";  
    input.className = "css-class-name"; 
    // send button
    const send = document.createElement("button");
    send.addEventListener("click", () => {console.log(document.getElementById("bottomChat").value);document.getElementById("bottomChat").value='';});
    send.innerText = "Send";
    send.setAttribute("id", "sendButton");
    send.setAttribute("class", "myButton");
    send.setAttributeNS("class", "myButton", "id", "sendButton", "type", "button", "className", "btn btn-primary");
    document.getElementById("sendButton").replaceWith(send);
}
export default OpenChat;