import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectFilterValue } from 'redux/contacts/selectors';
import ContactItem from 'components/ContactItem/ContactItem';

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
      <ContactItem filteredContacts={filteredContacts} />
    </ul>
  );
}
