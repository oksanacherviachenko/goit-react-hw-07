import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps'; 
import styles from './Contact.module.css';

function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li>
      {contact.name}: {contact.number}
      <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
    </li>
  );
}

export default Contact;


