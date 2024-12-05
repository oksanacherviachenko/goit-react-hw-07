import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

function SearchBox() {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      onChange={e => dispatch(changeFilter(e.target.value))}
      placeholder="Search contacts"
    />
  );
}

export default SearchBox;





