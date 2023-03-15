import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ filteredContacts }) => {
  const dispatch = useDispatch();
  return (
    <>
      {filteredContacts?.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <p className={css.text}>
            {name}: {number}
          </p>
          <IconButton
            aria-label="delete"
            onClick={() => dispatch(deleteContact(id))}
            color="primary"
          >
            <DeleteIcon />
          </IconButton>
        </li>
      ))}
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  onClick: PropTypes.func,
  filteredContacts: PropTypes.array,
};
