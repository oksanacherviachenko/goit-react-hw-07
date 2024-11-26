import React from 'react'; 
import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onChange }) => (
  <div className={styles.searchBoxContainer}>
    <label className={styles.label}>Find contacts by name</label>
    <input
      type="text"
      value={filter}
      onChange={onChange}
      className={styles.searchBox}
    />
  </div>
);

export default SearchBox;



