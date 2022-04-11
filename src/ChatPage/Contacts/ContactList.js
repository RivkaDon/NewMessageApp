import ContactCard from './ContactCard';
import contacts from './Contacts.js';
import { useRef } from "react";
import React from 'react';

const ContactList = contacts.map((contact, key) => {  
  return <ContactCard key={key} name={contact.name} img={contact.img} lastMessages={contact.lastMessage} time={contact.time}/>
  });
export default ContactList;