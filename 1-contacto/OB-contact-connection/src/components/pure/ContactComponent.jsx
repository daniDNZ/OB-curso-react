import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class"

export default function ContactComponent({ contact }) {
  return (
    <div>
      <h2>{contact.name} {contact.surname}</h2>
      <h3>Connected: {
        contact.connected
          ? 'Contacto En Línea'
          : 'Contacto No Disponible'
      }</h3>
    </div>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
}