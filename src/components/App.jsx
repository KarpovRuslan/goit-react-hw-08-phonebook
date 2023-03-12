import ContactForm from './ContactForm/';
import ContactList from './ContactList/';
import Filter from './Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'services/contactsApi';
import { ThreeDots } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#568f8f"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ marginLeft: 50 }}
          wrapperClassName=""
          visible={true}
        />
      )}
      <h2>Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
};
