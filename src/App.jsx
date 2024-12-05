import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { selectFilteredContacts } from './redux/contactsSlice';
import { selectNameFilter } from './redux/filtersSlice';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';

const App = () => {
  const dispatch = useDispatch();
 
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectNameFilter);
  const loading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Книга контактів</h1>
      <ContactForm />
      <h2>Контакти</h2>
      <SearchBox />
      {loading && <p>Завантаження...</p>}
      {error && <p>Сталася помилка: {error}</p>}
      <ContactList contacts={contacts} filter={filter} />
    </div>
  );
};

export default App;






