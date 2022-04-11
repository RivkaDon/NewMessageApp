import ContactList from "../Contacts/ContactList";
import HarryPmesseges from "../Messages/HarryPmessages";
import React from 'react';
import { useRef, useState } from "react";

function OpenChat({ name, lastMessages }) {
    const sendMessage = function(){
        const lineBreak = document.createElement('br');
        const myLastMessage = document.createElement('div');
        myLastMessage.setAttribute("id", "sent");
        myLastMessage.append(document.getElementById("bottomChat").value);
        document.getElementById("chatBox").append(myLastMessage);
        document.getElementById("chatBox").append(lineBreak);
        lastMessages.push([1,document.getElementById("bottomChat").value]);
        document.getElementById("bottomChat").value='';
    }
    document.getElementById("nameOfChatContact").innerHTML = name;
    document.getElementById("currentChat").innerHTML
        = ('<div class="chatElement" id="background"><div class="overflow-auto chatElement" id="chatBox"></div>'+
            '<button class="bottomChat" id="attachButton"></button><input id="bottomChat" class="bottomChat"></input>'
            + '<button class="bottomChat dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id="sendButton"></button></div>');
    //load all previous messeges
    const lineBreak = document.createElement('br');
    lastMessages.forEach(element =>{ const singleMessage = document.createElement('div');
    if (element[0]){
        singleMessage.setAttribute("id", "sent");
    }
    else{
        singleMessage.setAttribute("id", "recieved");
    }
    singleMessage.append(element[1]);   
    document.getElementById("chatBox").append(singleMessage);
    const lineBreak = document.createElement('br');
    document.getElementById("chatBox").appendChild(lineBreak);
    });
    // attach button
    const attach = document.createElement("button");
    attach.addEventListener("click", () => console.log("hello"));
    attach.setAttribute("id", "attachButton");
    attach.setAttribute("class", "myButton");
    attach.setAttributeNS("class", "myButton", "id", "attachButton", "type", "button", "className", "btn btn-primary");
    document.getElementById("attachButton").replaceWith(attach);
    attach.innerHTML = '<i class="bi bi-paperclip"></i>';
    // input
    const input = document.createElement("input");
    input.setAttribute("id", "bottomChat");
    input.type = "text";  
    input.className = "css-class-name"; 
    // send button
    const send = document.createElement("button");
    send.addEventListener("click", sendMessage);
    send.innerText = "Send";
    send.setAttribute("id", "sendButton");
    send.setAttribute("class", "myButton");
    send.setAttributeNS("class", "myButton", "id", "sendButton", "type", "button", "className", "btn btn-primary");
    document.getElementById("sendButton").replaceWith(send);
}
export default OpenChat;