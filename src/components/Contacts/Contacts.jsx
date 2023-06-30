import {
  ContactsList,
  ListItem,
  DeleteBtn,
  Title,
  Message,
  SortBtn,
  BtnWrapper,
  ContactsWrapper,
} from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectSortedAlphabetic,
  selectVisibleContacts,
  selectRecentlyAdded,
} from 'redux/selectors';
import { deleteContact, toggleIsFavourite } from 'redux/operation';
import { sortByAdded, sortByName } from 'redux/contactsSlice';
import { RiDeleteBin2Line } from 'react-icons/ri';
import {
  TbSortAscendingLetters,
  TbSortDescendingLetters,
  TbSortAscending2,
  TbSortDescending2,
} from 'react-icons/tb';
import { PiHeartFill, PiHeartBold } from 'react-icons/pi';

const Contacts = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const contacts = useSelector(selectContacts);
  const sortedAlphabetic = useSelector(selectSortedAlphabetic);
  const recentlyAdded = useSelector(selectRecentlyAdded);
  const dispatch = useDispatch();
  return (
    <>
      <Title>Contacts</Title>
      <ContactsWrapper>
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
        {contacts.length > 0 ? (
          <ContactsList>
            {visibleContacts.map(({ name, phone, id, isFavourite }) => {
              return (
                <ListItem key={id}>
                  {name}: {phone}
                  <BtnWrapper>
                    <DeleteBtn
                      type="button"
                      onClick={() => dispatch(deleteContact(id))}
                    >
                      <RiDeleteBin2Line size="20" />
                    </DeleteBtn>
                    <DeleteBtn
                      type="button"
                      onClick={() =>
                        dispatch(toggleIsFavourite({ id, isFavourite }))
                      }
                    >
                      {isFavourite ? (
                        <PiHeartBold size="20" />
                      ) : (
                        <PiHeartFill size="20" />
                      )}
                    </DeleteBtn>
                  </BtnWrapper>
                </ListItem>
              );
            })}
          </ContactsList>
        ) : (
          <Message>Add your first contact</Message>
        )}
      </ContactsWrapper>
    </>
  );
};

export default Contacts;
