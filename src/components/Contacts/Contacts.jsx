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
import { TbSortAscendingLetters, TbSortAscending2 } from 'react-icons/tb';

const Contacts = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <>
      <Title>Contacts</Title>

      {contacts.length > 0 ? (
        <ContactsList>
          <BtnWrapper>
            <SortBtn onClick={() => dispatch(sortByName())}>
              Sort by name <TbSortAscendingLetters size="20" />
            </SortBtn>
            <SortBtn onClick={() => dispatch(sortByAdded())}>
              Recently added <TbSortAscending2 size="20" />
            </SortBtn>
          </BtnWrapper>

          {visibleContacts.map(({ name, phone, id }) => (
            <ListItem key={id}>
              {name}: {phone}
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
