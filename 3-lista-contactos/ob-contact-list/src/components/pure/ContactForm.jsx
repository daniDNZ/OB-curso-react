import { useRef } from "react";

export default function ContactForm({ addContact }) {
  const formStyle = {
    margin: '0 auto',
    width: 'fit-content'
  }
  const inputStyle = {
    margin: '0 5px 0 0' 
  }
  const contactNameRef = useRef();
  const contactPhoneRef = useRef();

  const handleForm = (e) => {
    e.preventDefault();
    const newContact = {
      name: contactNameRef.current.value,
      phone: contactPhoneRef.current.value,
      connected: false
    }
    addContact(newContact);
  }

  return (
    <form onSubmit={handleForm} style={formStyle}>
      <input
        ref={contactNameRef}
        type="text"
        name="contactName"
        id="contactName"
        placeholder="Name"
        autoFocus
        required
        style={inputStyle}
      />
      <input
        ref={contactPhoneRef}
        type="text"
        name="contactPhone"
        id="contactPhone"
        placeholder="Phone"
        required
        style={inputStyle}
      />
      <input
        type="submit"
        value="Create"
        style={inputStyle}
      />
    </form>
  )
}