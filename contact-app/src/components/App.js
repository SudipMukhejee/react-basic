import React, {useState,useEffect} from 'react';
import './App.css';
 import Header from './Heder';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };
  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={addContactHandler }/>
      <ContactList contacts={contacts}  />
      </div>
  );
}

export default App;
