import React from 'react'
import ContactCard from './ContactCard'
import { Button, Header, Image, Modal, Grid } from 'semantic-ui-react'


const ContactsList = (props) => {
  const contactCards = props.contacts.map((contact) => {
    return <ContactCard contact={contact}/>
  })
  return (
    <Grid>
      <Grid.Row>
          {contactCards}
      </Grid.Row>
    </Grid>
  )
}

export default ContactsList
