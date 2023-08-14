import React, { Component } from 'react';



import { Container, Title } from './App.Styled';

import ContactForm from '../components/ContactForm/ContactForm';

import ContactList from '../components/ContactList/ContactList';

import Filter from '../components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleContactAdd = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleContactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Container>
        <Title>PhoneBook</Title>
        <ContactForm contacts={contacts} onContactAdd={this.handleContactAdd} />

        <h2>Сontacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onContactDelete={this.handleContactDelete}
        />
      </Container>
    );
  }
}



export default App;
