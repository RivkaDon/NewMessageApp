import './ChatPage.css'
import './Contacts/ContactCard.css';
import { useRef, useState } from 'react';
import ContactCard from './Contacts/ContactCard';
import React from 'react';
import OpenChat from './Chats/ChatCard';
import contacts from './Contacts/Contacts';
function ChatPage() {
    // hook for rerendering the page 
    const [reRender, setReRender] = useState();
    // hook for passing and updating contact messages
    const [getMessages, setMessages] = useState();
    // hook for passing name of contact whom we clicked on their contact card
    const [getChat, setChat] = useState();
    // hook for reloading all the contacts after adding a contact
    const [NewContactList, addUserName] = useState(contacts);
    // hook for storing the newly entered username 
    const newUserName = useRef();
    // function to push a new contact into the contact list
    const SubmitNewContact = function () {
        let myArray = [["", ""]];
        let name = newUserName.current.value;
        addUserName((prev) => {
            return prev.concat({ img: null, name: name, lastMessage: myArray, time: "" });
        });
        newUserName.current.value = '';
    }
    return (
        <div className="App container">
            <div className="container" id="topStrip">
                <div className="row">
                    <div className="col-4">
                        <button type="button" className="btn">
                            <i className="bi bi-envelope-paper-heart-fill"></i>
                        </button>Rivka Doniger
                        <button type="button" id='addButton' className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="bi bi-person-plus"></i>
                        </button>
                    </div>
                    <div className="col-4" id="currentChat">
                        <OpenChat getter={getChat} messageGetter={getMessages} messageSetter={setMessages} contactSetter={addUserName} setReRender={setReRender} />
                    </div>
                </div>
            </div>
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add new contact</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input ref={newUserName} type="text" className="form-control" placeholder="Contact's Identifier" aria-label="Username" aria-describedby="basic-addon1"></input>
                            </div>
                            <div className="modal-footer">
                                {/*button adds the username chosen on click and modal closes*/}
                                <button onClick={SubmitNewContact} type="button" className="btn btn-primary" data-bs-dismiss="modal">Add contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4 overflow-scroll" >
                    {NewContactList.map((contact, key) => <ContactCard key={key} name={contact.name} img={contact.img} lastMessages={contact.lastMessage} time={contact.time} setter={setChat} messagesSetter={setMessages} />)}
                </div>

            </div>
        </div>
    );
}
export default ChatPage;