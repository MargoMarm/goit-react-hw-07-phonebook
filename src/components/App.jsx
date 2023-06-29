import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { WrapperContent } from './App.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
	const error = useSelector(selectError);
	const isLoading = useSelector(selectIsLoading)
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <WrapperContent>
      <ContactForm />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <Contacts />
    </WrapperContent>
  );
};
