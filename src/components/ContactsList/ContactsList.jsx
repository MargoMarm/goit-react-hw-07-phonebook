import { List, ListItem, DeleteBtn, BtnWrapper } from './ContactsList.styled';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { PiHeartFill, PiHeartBold } from 'react-icons/pi';
import { deleteContact, toggleIsFavourite } from 'redux/operation';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectVisibleContacts,
  selectFavourites,
  selectFavIsShown,
} from 'redux/selectors';
import SortedBtns from 'components/SortedBtns/SortedBtns';

const ContactList = () => {
  let visibleContacts = useSelector(selectVisibleContacts);
  const favContacts = useSelector(selectFavourites);
  const favIsShown = useSelector(selectFavIsShown);
  const dispatch = useDispatch();
  const contactsToShow = favIsShown ? favContacts : visibleContacts;

	return (
		<>
			<SortedBtns/>
    <List>
      {contactsToShow.map(({ name, phone, id, isFavourite }) => {
        return (
          <ListItem key={id}>
            {name}: {phone}
            <BtnWrapper>
              <DeleteBtn
                type="button"
                onClick={() => dispatch(toggleIsFavourite({ id, isFavourite }))}
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
    </List>
	  </>
  );
};

export default ContactList;
