import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => (
  <li className={styles.contact}>
    <div className={styles.contactInfo}>
      <div className={styles.contactName}>
        <span className={styles.icon}>👤</span> {name}
      </div>
      <div className={styles.contactNumber}>
        <span className={styles.icon}>📞</span> {number}
      </div>
    </div>
    <button onClick={() => onDelete(id)} className={styles.deleteButton}>Delete</button>
  </li>
);

export default Contact;


