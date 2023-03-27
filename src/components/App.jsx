import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { PhonebookStyled } from './App.styled';



export function App() {
  const [contacts, setContacts] = useState([]);
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
