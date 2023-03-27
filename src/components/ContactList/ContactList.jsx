import { ContactItem } from 'components/ContactItem/ContactItem';
import { useEffect, useState } from 'react';

import styled from 'styled-components';

export function ContactList({ contactList, filterQuery, onDeleteContact }) {
  const [contacts, setContacts] = useState(contactList);
  useEffect(() => {
    setContacts(contactList);
  }, [contactList]);

  const contactsToRender = (contacts, filterQuery) => {
    let searchQuery = filterQuery.toString().toLowerCase();
    if (searchQuery === '') {
      return contacts;
    } else {
      return contacts.filter(person => {
        return person.name.toLowerCase().includes(searchQuery);
      });
    }
  };

  return (
    <List>
      {contactsToRender(contacts, filterQuery).map(contact => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={() => onDeleteContact(contact.id)}
          id={contact.id}
        ></ContactItem>
      ))}
    </List>
  );
}

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 20px;
  padding: 0;
`;
