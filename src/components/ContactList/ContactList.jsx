import React, { Component } from 'react';

import { ContactListContainer, ContactItem } from './ContactList.Styled';

class ContactList extends Component {
  handleDelete = id => {
    this.props.onContactDelete(id);
  };

  render() {
    const { contacts, filter } = this.props;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <ContactListContainer>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id}>
            {contact.name} - {contact.number}{' '}
            <button onClick={() => this.handleDelete(contact.id)}>
              Delete
            </button>
          </ContactItem>
        ))}
      </ContactListContainer>
    );
  }
}

export default ContactList;
