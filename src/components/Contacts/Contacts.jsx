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
import {
	selectContacts,
	selectSortedAlphabetic,
	selectVisibleContacts,
	selectRecentlyAdded,
} from 'redux/selectors';
import { deleteContact } from 'redux/operation';
import { sortByAdded, sortByName } from 'redux/contactsSlice';
import { RiDeleteBin2Line } from 'react-icons/ri';
import {
  TbSortAscendingLetters,
  TbSortDescendingLetters,
	TbSortAscending2,
  TbSortDescending2
} from 'react-icons/tb';

const Contacts = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const contacts = useSelector(selectContacts);
	const sortedAlphabetic = useSelector(selectSortedAlphabetic);
	const recentlyAdded = useSelector(selectRecentlyAdded);
  const dispatch = useDispatch();

  return (
    <>
      <Title>Contacts</Title>

      {contacts.length > 0 ? (
        <ContactsList>
          <BtnWrapper>
            <SortBtn onClick={() => dispatch(sortByName())}>
              Sort by name
              {sortedAlphabetic ? (
                <TbSortDescendingLetters size="20" />
              ) : (
                <TbSortAscendingLetters size="20" />
              )}
            </SortBtn>
            <SortBtn onClick={() => dispatch(sortByAdded())}>
              Recently added{' '}
              {recentlyAdded ? (
                <TbSortAscending2 size="20" />
              ) : (
                <TbSortDescending2 size="20" />
              )}
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
