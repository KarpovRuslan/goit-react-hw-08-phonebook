import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectFilterValue } from 'redux/contacts/selectors';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilterValue);
  const filteredContacts = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.ContactList}>
      <p className={css.ContactList_find}>
        Total contacts: {filteredContacts?.length}
      </p>
      {filteredContacts?.map(elm => (
        <li key={elm.id} className={css.ContactList__item}>
          <p className={css.ContactList__text}>
            {elm.name}: {elm.number}
          </p>

          <IconButton
            aria-label="delete"
            onClick={() => dispatch(deleteContact(elm.id))}
            color="primary"
          >
            <DeleteIcon />
          </IconButton>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  onClick: PropTypes.func,
};
