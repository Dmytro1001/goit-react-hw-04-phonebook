import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactItem } from './Contact/Contact';
import { Filter } from './Filter/Filter';
import { GlobalStyles } from './GlobalStyles';
import { Wrapper } from './App.module';
import contactsPhone from '../data/data.json';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts;
  }
  return contactsPhone;
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (
      contacts.find(contact =>
        contact.name.toLowerCase().includes(newContact.name.toLowerCase())
      )
    ) {
      window.alert(`${newContact.name} is already in contacts!`);
    } else {
      setContacts(contacts => [...contacts, newContact]);
    }
  };

  const deleteContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Wrapper>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitContact={addContact} />
      </div>
      <ContactList>
        <Filter value={filter} onChange={changeFilter} />
        <ContactItem
          contacts={getFilteredContacts()}
          onDelete={deleteContact}
        />
      </ContactList>
      <GlobalStyles />
    </Wrapper>
  );
};
