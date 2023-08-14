import React, { Component } from 'react';

import PropTypes from 'prop-types'; 

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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onContactDelete: PropTypes.func.isRequired,
};

export default ContactList;
