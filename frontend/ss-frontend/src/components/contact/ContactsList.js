import React from 'react'
import ContactCard from './ContactCard'
import { Grid } from 'semantic-ui-react'


const ContactsList = (props) => {
  const contactCards = props.contacts.map((contact, index) => {
    return <ContactCard key={index} contact={contact}/>
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
