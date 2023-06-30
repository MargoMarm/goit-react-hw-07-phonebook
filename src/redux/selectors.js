import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter.filter;

export const selectContacts = state => state.contacts.contacts;

export const selectError = state => state.contacts.error;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectFavIsShown = state => state.contacts.favIsShown;

export const selectSortedAlphabetic = state => state.contacts.sortedAlphabetic;

export const selectRecentlyAdded = state => state.contacts.recentlyAdded;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    return filtredContacts;
  }
);

export const selectFavourites = createSelector([selectContacts], contacts => {
	const favContacts = contacts.filter(contact => contact.isFavourite);
	return favContacts;
})