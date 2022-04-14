import React from 'react';
import AttachImage from './ImageAttachment';
import { useRef, useState } from "react";
import './ChatCard.css'
import AttachVideo from './VideoAttachment';

function OpenChat({ getter, messageGetter, messageSetter, contactSetter, setReRender }) {
    // const newImage = useRef();
    // const [img, setImg] = useState();
    // const onImageChange = () => {
    //     const [file] = newImage.current.files;
    //     if(file){
    //     console.log(file);
    //     setImg(URL.createObjectURL(file));
    //     messageGetter.push([1, file.name, 'now', 'pic']);
    //     setReRender(messageGetter[messageGetter.length - 1][1]);
    //     newImage.current.value = null;
    //     }
    // };
    const [getMessage, setMessage] = useState();
    const newMessage = useRef();
    const showNewMessage = () => {
        messageGetter.push([1, newMessage.current.value, 'now', 'text']);
        setMessage(newMessage.current.value);
        newMessage.current.value = "";
        setReRender(messageGetter[messageGetter.length - 1][1]);
    };
    const messageArr = messageGetter;
    const loadMessages = function () {
        if (messageArr) {
            return (messageArr.map((element) => {
                switch (element[0]) {
                    case 1:
                        if (element[3] == 'text') {
                            return <div id="sent"><span className="badge bg-secondary">{element[1]}</span></div>;
                        }
                        else if (element[3] == 'vid') {
                            return <div id="sent"><video width="320" height="240" autoplay muted controls playsinline>
                                <source src={element[1]} type="video/mp4"></source>
                            </video></div>;
                        }
                        return <p><span><img id="picSent" src={element[1]} alt="" /></span></p>;
                    case 0:
                        if (element[3] == 'text') {
                            return <div id="recieved"><span className="badge bg-secondary">{element[1]}</span></div>;
                        }
                        else if (element[3] == 'vid') {
                            return <div id="recieved"><video width="320" height="240" autoplay muted controls playsinline>
                                <source src={element[1]} type="video/mp4"></source>
                            </video></div>;}
                        return <p><span><img id="picRecieved" src={element[1]} alt="" /></span></p>;
                    default:
                        return;
                }
            }));
        }
    };
    return (
        <div>{getter}<div className="chatElement" id="background">
            <AttachImage messageGetter={messageGetter} setReRender={setReRender} loadMessages={loadMessages} />
            <AttachVideo messageGetter={messageGetter} setReRender={setReRender} loadMessages={loadMessages} />
            <div className="overflow-auto chatElement" id="chatBox">{loadMessages()}</div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle btn-sm" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-paperclip"></i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#picModal"><i className="bi bi-camera attach"></i> Image
                    </a></li>
                    <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#vidModal"><i className="bi bi-camera-reels attach"></i> Video</a></li>
                    <li><a className="dropdown-item" href="#"><i className="bi bi-mic attach"></i> Record</a></li>
                    <li><a className="dropdown-item" href="#"><i className="bi bi-file-earmark-music attach"></i> Sound</a></li>
                </ul>
            </div><input type="text" ref={newMessage} className="form-control bottomChat" placeholder="New Message" aria-label="Username" ></input>
            <button type="button" className="btn btn-secondary myButton" id="sendButton" onClick={showNewMessage}>Send</button>
        </div>
        </div>
    )
}
export default OpenChat;