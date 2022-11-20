import { useState } from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/ContactComponent";

export default function ContactContainer() {
  const [contact, setContact] = useState(new Contact('Pedro', 'Pérez', 'pperez@gmail.com', false));

  const toggleConnection = () => {
    setContact((oldContact) => ({ ...oldContact, connected: !oldContact.connected }));
  }
  return (
    <div>
      <ContactComponent contact={contact} />
      <button onClick={toggleConnection}>{contact.connected ? 'Disconnect' : 'Connect'}</button>
    </div>
  )
}