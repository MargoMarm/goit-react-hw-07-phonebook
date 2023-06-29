import {
  ContactsList,
  ListItem,
  DeleteBtn,
  Title,
  Message,
  SortBtn,
  BtnWrapper,
} from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operation';
import { sortByAdded, sortByName } from 'redux/contactsSlice';
import { RiDeleteBin2Line } from 'react-icons/ri';

const Contacts = () => {
	const visibleContacts = useSelector(selectVisibleContacts);
	const contacts = useSelector(selectContacts)
  const dispatch = useDispatch();

  return (
    <>
      <Title>Contacts</Title>

      {contacts.length > 0 ? (
			  <ContactsList>
				  <BtnWrapper>
          <SortBtn onClick={() => dispatch(sortByName())}>Sort by name</SortBtn>
          <SortBtn onClick={() => dispatch(sortByAdded())}>Recently added</SortBtn>
					  
				  </BtnWrapper>

          {visibleContacts.map(({ name, phone, id }) => (
            <ListItem key={id}>
              <p>
                <span>{name}: </span>
                <span>{phone} </span>
              </p>
              <DeleteBtn
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                <RiDeleteBin2Line size="20" />
              </DeleteBtn>
            </ListItem>
          ))}
        </ContactsList>
      ) : (
        <Message>Add your first contact</Message>
      )}
    </>
  );
};

export default Contacts;
