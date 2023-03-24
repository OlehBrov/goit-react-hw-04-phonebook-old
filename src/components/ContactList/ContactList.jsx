import { ContactItem } from 'components/ContactItem/ContactItem';
import { Component } from 'react';
import styled from 'styled-components';
export class ContactList extends Component {
  state = {
    contacts: this.props.contactList.contacts,
    filter: this.props.contactList.filter,
  };

  makeList = state => {

    let searchQuery = this.props.contactList.filter.toString().toLowerCase();
    if (this.props.contactList.filter === '') {
      return this.props.contactList.contacts;
    } else {
      return (this.props.contactList.contacts.filter(person => {
        return person.name.toLowerCase().includes(searchQuery);
      }));
    }
  };
;
  render() {
    return (
      
      (
        <List>
          {this.makeList(this.state).map(contact => (
            <ContactItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
            //   onDeleteContact={this.props}
              id={contact.id}
              >{ this.props}</ContactItem>
          ))}
        </List>
      )
    );
  }
}

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 20px;
`