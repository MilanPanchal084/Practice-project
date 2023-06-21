import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const deleteContactHandler = (id)=>{
        props.getContactId(id);
    }

    // const contacts = [{
    //     id: 1,
    //     name: "Milan",
    //     email: "cs@gmail.com",
    // }]
    const renderList = props.contacts.map( (contact) =>{
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} />
        );
    })
    return(
        <div className='ui celled list'>
           {renderList}
        </div>
    );
}

export default ContactList