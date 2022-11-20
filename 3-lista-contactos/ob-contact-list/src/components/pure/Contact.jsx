export default function Contact({ contact, toggleConnection, deleteContact }) {
  const tdStyle = {
    padding: '0 1em',
    width: '100px'
  };
  const connectedStyle = {
    fontWeight: 'bold',
    color: 'green'
  }
  const disconnectedStyle = {
    fontWeight: 'bold',
    color: 'red'
  }
  const trStyle = {
    listStyle: 'none',
    width: 'fit-content'
  }
  const buttonStyle = {
    backgroundColor: contact.connected ? 'red' : 'green',
    width: '100%',
    margin: '1px auto'
  }
  const deleteStyle = {
    backgroundColor: 'red',
    width: '100%',
    margin: '1px auto'
  }
  return (
    <tr style={trStyle}>
      <td style={tdStyle}>
        <h3 style={{ display: "inline-block" }}>
          {contact.name}:
        </h3>
      </td>
      <td style={tdStyle}>
        <span>
          {contact.phone}
        </span>
      </td>
      <td style={tdStyle}>
        <span style={contact.connected ? connectedStyle : disconnectedStyle}>
        {contact.connected ? 'Connected' : 'Disconnected'}
        </span>
      </td>
      <td style={tdStyle}>
        <button style={buttonStyle} onClick={() => { toggleConnection(contact)}}>
          {contact.connected ? 'Disconnect' : 'Connect'}
        </button>
        <button style={deleteStyle} onClick={() => { deleteContact(contact)}}>
          Delete
        </button>
      </td>
    </tr>
  )
}