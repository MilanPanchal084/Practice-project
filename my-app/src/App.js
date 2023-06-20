import "./App.css";
import Header from "./Componants/Header";
import Addcontact from "./Componants/Addcontact";
import ContactList from "./Componants/ContactList";
import React, { useState, useEffect } from "react";

function App() {
  const LOCAL_STORE_KEY = "contacts";
  // const [contact, setContact] = useState(()=>{
  //   return JSON.parse(localStorage.getItem(LOCAL_STORE_KEY)) || [] 
  // });
  const [contact, setContact] = useState([]);
  const addContactHandler = (cont) => {
    console.log(contact);
    setContact([...contact, cont]);
  };

  useEffect(() => {
    const retrievcontacts = JSON.parse(localStorage.getItem(LOCAL_STORE_KEY));
    if(retrievcontacts) setContact(retrievcontacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(contact));
  }, [contact]);

 

  return (
    <div className="App ui container ">
      <h2>React App</h2>
      <Header />
      <Addcontact addContactHandler={addContactHandler} />
      <ContactList contacts={contact} />
    </div>
  );
}

export default App;
