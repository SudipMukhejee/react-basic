import React, {useState,useEffect} from 'react';
import './App.css';
import {uuid} from 'uuidv4';
 import Header from './Heder';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid() ,...contact}]);
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(() => {
    console.log("useEffect");
   
    const retriveContacts = JSON.parse(localStorage.getItem("contacts"));
    if(retriveContacts) setContacts(retriveContacts);
  }, []);
  useEffect(() => {
    console.log("useEffect");
   
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={addContactHandler }/>
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
      </div>
  );
}

export default App;
