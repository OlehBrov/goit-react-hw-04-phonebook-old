import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { PhonebookStyled } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [searchFilter, setSearchFilter] = useState('');
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const localState = localStorage.getItem('local-contacts');
    const localStateParsed = JSON.parse(localState);
    if (localStateParsed !== null) {
      setContacts(localStateParsed);
    }
    setFirstLoad(false);
  }, []);

  useEffect(() => {
    if (!firstLoad) {
      localStorage.setItem('local-contacts', JSON.stringify(contacts));
    }
  }, [contacts, firstLoad]);

  const checkEqualContact = contact => {
    return contacts.some(
      el => el.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  const addContact = contact => {
    if (!checkEqualContact(contact)) {
      contact = {
        id: nanoid(),
        ...contact,
      };
      setContacts([...contacts, contact]);
    } else alert('Such contact already exists');
  };

  const filterContacts = searchFilter => {
    setSearchFilter(searchFilter);
  };

  const onDeleteContact = id => {
    setContacts(contacts.filter(el => el.id !== id));
    // localStorage.setItem('local-contacts', JSON.stringify(contacts));
    // localStorage.setItem('local-contacts', JSON.stringify(contacts.filter(el => el.id !== id)));
  };
  return (
    <PhonebookStyled>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Total contacts: {contacts.length}</h2>
      <Filter contacts={contacts} filterContacts={filterContacts} />
      <ContactList
        contactList={contacts}
        filterQuery={searchFilter}
        onDeleteContact={onDeleteContact}
      ></ContactList>
    </PhonebookStyled>
  );
}
