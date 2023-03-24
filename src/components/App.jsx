import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { PhonebookStyled } from './App.styled';
import { FilterStyled } from './Filter/Filter.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  checkEqualContact = contact => {
    return this.state.contacts.some(
      el => el.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  addContact = contact => {
    if (!this.checkEqualContact(contact)) {
      contact = {
        id: nanoid(),
        ...contact,
      };

      this.setState(prevState => {
        return prevState.contacts.splice(0, 0, contact);
      });
    } else alert('Such contact already exists');
  };

  filterContacts = filter => {
    this.setState(
      {
        ...this.state,
        filter: filter,
      },
    );
  };
  onDeleteContact = id => {
   return this.setState((state) => {
     return {contacts: state.contacts.filter(el => el.id !== id)};
   
    });
  };
  render() {
    return (
      <PhonebookStyled>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filterContacts={this.filterContacts} />
        <ContactList
          contactList={this.state}
          onDeleteContact={this.onDeleteContact}
        ></ContactList>
      </PhonebookStyled>
    );
  }
}

