import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/contactsSlice';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <div className={css.Filter__block}>
      <label htmlFor="find" className={css.Filter}>
        Find contacts by <span className={css.Filter__text}>name</span>
      </label>
      <TextField
        fullWidth
        label="search"
        size="small"
        margin="dense"
        type="text"
        className={css.Filter__input}
        onChange={e => dispatch(filterContact(e.target.value.toLowerCase()))}
      />
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};
