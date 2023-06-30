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
  selectFavourites,
  selectFavIsShown,
} from 'redux/selectors';
import { deleteContact, toggleIsFavourite } from 'redux/operation';
import {
  sortByAdded,
  sortByName,
  toggleShowFavourites,
} from 'redux/contactsSlice';
import { RiDeleteBin2Line } from 'react-icons/ri';
import {
  TbSortAscendingLetters,
  TbSortDescendingLetters,
  TbSortAscending2,
  TbSortDescending2,
  TbUserHeart,
} from 'react-icons/tb';
import { PiHeartFill, PiHeartBold } from 'react-icons/pi';

const Contacts = () => {
  let visibleContacts = useSelector(selectVisibleContacts);
  const contacts = useSelector(selectContacts);
  const favContacts = useSelector(selectFavourites);
  const favIsShown = useSelector(selectFavIsShown);
  const sortedAlphabetic = useSelector(selectSortedAlphabetic);
  const recentlyAdded = useSelector(selectRecentlyAdded);
  const dispatch = useDispatch();
  const contactsToShow = favIsShown ? favContacts : visibleContacts;
  const textToShow = !favIsShown ? 'Show my favourites' : 'Show all';

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
          <SortBtn onClick={() => dispatch(toggleShowFavourites())}>
            {textToShow} <TbUserHeart size="20" />
          </SortBtn>
        </BtnWrapper>
        {contacts.length > 0 ? (
          <ContactsList>
            {contactsToShow.map(({ name, phone, id, isFavourite }) => {
              return (
                <ListItem key={id}>
                  {name}: {phone}
                  <BtnWrapper>
                    <DeleteBtn
                      type="button"
                      onClick={() =>
                        dispatch(toggleIsFavourite({ id, isFavourite }))
                      }
                    >
                      {isFavourite ? (
                        <PiHeartFill size="20" />
                      ) : (
                        <PiHeartBold size="20" />
                      )}
                    </DeleteBtn>
                    <DeleteBtn
                      type="button"
                      onClick={() => dispatch(deleteContact(id))}
                    >
                      <RiDeleteBin2Line size="20" />
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
