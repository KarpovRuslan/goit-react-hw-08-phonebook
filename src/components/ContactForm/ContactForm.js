import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    } else if (evt.target.name === 'number') {
      setNumber(evt.target.value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (!contacts?.find(el => el.name === name)) {
      dispatch(addContact({ name, number }));
    } else {
      alert(`${name} is already in contacts`);
    }

    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.ContactForm}>
        <TextField
          type="text"
          size="small"
          margin="dense"
          label="Name"
          value={name}
          onChange={handleInputChange}
          name="name"
          className={css.ContactForm__input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <TextField
          type="tel"
          size="small"
          margin="dense"
          label="Number"
          value={number}
          onChange={handleInputChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button
          type="submit"
          variant="contained"
          startIcon={<PersonAddAlt1Icon />}
        >
          Add contact
        </Button>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
