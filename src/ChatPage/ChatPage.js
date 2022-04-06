import './ChatPage.css'
import './Contacts/ContactCard.css';
import ContactList from './Contacts/ContactList';
import { useRef, useState } from 'react';
import ContactCard from './Contacts/ContactCard';
function ChatPage() {
    // hook for reloading all the contacts after adding a contact
    const [NewContactList, addUserName] = useState(ContactList);
    // hook for storing the newly entered username 
    const newUserName = useRef(null);
    // function to push a new contact into the contact list
    const SubmitNewContact = function () {
        addUserName(ContactList.push(<ContactCard key={ContactList.length} name={newUserName.current.value} lastMessage="" time="" />));
    }
    return (
        <div className="App container">
            <div className="row" id="topStrip">
                <div className="col-4">
                    <button type="button" className="btn">
                        <i className="bi bi-envelope-paper-heart-fill"></i>
                    </button>
                    <button type="button" id='addButton' className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-person-plus"></i>
                    </button>
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
            </div>
            <div className="row">  
            <div className="col-4" >
                    {ContactList}
                </div>  
                <div className="col" id="currentChat"></div>
            </div>
        </div>
    );
}
export default ChatPage;