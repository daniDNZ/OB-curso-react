import { useState } from "react"
import ContactForm from "../pure/ContactForm";
import ContactList from "../pure/ContactList";

export default function ContactsContainer() {
  const initialContacts = [
    {
      name: 'Juan',
      phone: '619234823',
      connected: false
    },
    {
      name: 'Pepe',
      phone: '619234856',
      connected: false
    },
    {
      name: 'Luis',
      phone: '619234866',
      connected: true
    },
  ]

  const [contacts, setContacts] = useState(initialContacts);

  const toggleConnection = (contact) => {
    const tempContacts = [...contacts];
    const index = tempContacts.indexOf(contact);
    tempContacts[index].connected = !contact.connected;
    setContacts(tempContacts);
  }
  const deleteContact = (contact) => {
    const tempContacts = [...contacts];
    const index = tempContacts.indexOf(contact);
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  }
  const addContact = (contact) => {
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }
  return (
    <div style={{width: '100%'}}>
      <ContactList
        contacts={contacts}
        toggleConnection={toggleConnection}
        deleteContact={deleteContact}
      />
      <ContactForm addContact={addContact} />
    </div>
  )
}