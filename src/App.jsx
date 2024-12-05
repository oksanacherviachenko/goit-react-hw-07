import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { selectFilteredContacts } from './redux/contactsSlice';
import { selectNameFilter } from './redux/filtersSlice';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectNameFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <SearchBox />
      {contacts.length > 0 ? (
        <ContactList contacts={contacts} />
      ) : (
        <p>No contacts found for "{filter}".</p>
      )}
    </div>
  );
};

export default App;
