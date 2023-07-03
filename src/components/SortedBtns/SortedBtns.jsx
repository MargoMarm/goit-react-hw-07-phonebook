import {
  sortByAdded,
  sortByName,
  toggleShowFavourites,
} from 'redux/contactsSlice';
import {
  selectSortedAlphabetic,
  selectRecentlyAdded,
  selectFavIsShown,
} from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import {
  TbSortAscendingLetters,
  TbSortDescendingLetters,
  TbSortAscending2,
  TbSortDescending2,
  TbUserHeart,
} from 'react-icons/tb';
import { SortBtn, BtnWrapper } from './SortedBtns.styled';

const SortedBtns = () => {
  const favIsShown = useSelector(selectFavIsShown);
  const sortedAlphabetic = useSelector(selectSortedAlphabetic);
  const recentlyAdded = useSelector(selectRecentlyAdded);
  const dispatch = useDispatch();
  const textToShow = !favIsShown ? 'Show my favourites' : 'Show all';
  return (
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
  );
};

export default SortedBtns;
