import { Title, Message, ContactsWrapper } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

import ContactsList from 'components/ContactsList/ContactsList';

const Contacts = () => {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <Title>Contacts</Title>
      <ContactsWrapper>
        {contacts.length > 0 ? (
          <ContactsList />
        ) : (
          <Message>Add your first contact</Message>
        )}
      </ContactsWrapper>
    </>
  );
};

export default Contacts;
