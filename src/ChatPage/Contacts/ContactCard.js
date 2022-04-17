
import OpenChat from '../Chats/ChatCard.js'
import './ContactCard.css';
import { useRef, useState } from "react";
import React from 'react';


function ContactCard({ name, img, lastMessages, time, setter, messagesSetter, reRender }) {
  const setChat = ()=>{setter(name);messagesSetter(lastMessages)};
  return (
    <div className="container" onClick={setChat}>
      <ol className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-start">  
        <img src={img}></img>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{name}</div>
            <div>{lastMessages[lastMessages.length-1][1]}</div>
          </div>
          <div className="position-absolute bottom-0 end-0" id='time'>{lastMessages[lastMessages.length-1][2]}</div>
        </li>
      </ol>
    </div>
  );
}

export default ContactCard;
