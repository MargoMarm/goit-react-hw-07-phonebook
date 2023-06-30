import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import {
  addContact,
  deleteContact,
  fetchContacts,
  toggleIsFavourite,
} from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    error: null,
    isLoading: false,
    sortedAlphabetic: true,
    recentlyAdded: true,
    favIsShown: false,
  },
  reducers: {
    sortByName(state) {
      state.contacts = state.contacts.sort((firstContact, secondContact) =>
        state.sortedAlphabetic
          ? firstContact.name.localeCompare(secondContact.name)
          : secondContact.name.localeCompare(firstContact.name)
      );
      state.sortedAlphabetic = !state.sortedAlphabetic;
    },
    sortByAdded(state) {
      state.contacts = state.contacts.sort((firstContact, secondContact) =>
        state.recentlyAdded
          ? secondContact.id - firstContact.id
          : firstContact.id - secondContact.id
      );
      state.recentlyAdded = !state.recentlyAdded;
    },
    toggleShowFavourites(state) {
      state.favIsShown = !state.favIsShown;
    },
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [toggleIsFavourite]: handlePending,

    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [toggleIsFavourite]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },

    [addContact.fulfilled](state, action) {
      state.contacts.unshift(action.payload);
      state.isLoading = false;
      state.error = null;
      Notiflix.Notify.success(
        `${action.payload.name} has been successfully added to  your phonebook`
      );
    },

    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [toggleIsFavourite.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log(action.payload.id);
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );

      state.contacts[index] = action.payload;
    },
  },
});

export default contactsSlice.reducer;
export const { sortByName, sortByAdded, toggleShowFavourites } =
  contactsSlice.actions;
