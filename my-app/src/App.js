import "./App.css";
import Header from "./Componants/Header";
import Addcontact from "./Componants/Addcontact";
import ContactList from "./Componants/ContactList";
import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
// import Demo from "./Componants/Demo";

function App() {
  const LOCAL_STORE_KEY = "contacts";

  const [contact, setContact] = useState(()=>{
    return JSON.parse(localStorage.getItem(LOCAL_STORE_KEY)) || {
      name: '',
      email: ''
    }
  });

  const addContactHandler = (cont) => {
    setContact([...contact, { id: uuid(), ...cont }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contact.filter((contact) => {
      return contact.id != id;
    });
    setContact(newContactList);
  };

  // useEffect(() => {
  //   const retrievcontacts = JSON.parse(localStorage.getItem(LOCAL_STORE_KEY));
  //   setContact(retrievcontacts);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(contact));
  }, [contact]);

  return (
    <div className="App ui container ">
      <Router>
        <Header />
        <Routes>
          <Route path="/add" exact Component={() => <Addcontact addContactHandler={addContactHandler} />} />
          <Route path="/" Component={()=> <ContactList contacts={contact} getContactId={removeContactHandler} />} />
          {/* <Addcontact addContactHandler={addContactHandler} /> */}
          {/* <ContactList contacts={contact} getContactId={removeContactHandler} /> */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
