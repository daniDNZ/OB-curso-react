import Contact from "./Contact"

export default function ContactList({ contacts, toggleConnection, deleteContact }) {

  const ulStyle = {
    width: 'fit-content',
    margin: '0 auto',
    display: 'block'
  }

  return (
    <table style={ulStyle}>
      <tbody>
      {
        contacts.map((contact) =>
          <Contact
          key={contact.phone} 
          toggleConnection={toggleConnection}
          deleteContact={deleteContact}
          contact={contact}
          />)
      }
      </tbody>
    </table>
  )
}