import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { addContact, deleteContact, fetchContacts } from './operation';

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
  },
  reducers: {
    sortByName(state) {
      state.contacts = state.contacts.sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
      );
    },
    sortByAdded(state) {
      state.contacts = state.contacts.sort(
        (firstContact, secondContact) => secondContact.id - firstContact.id
      );
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,

    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },

    [addContact.fulfilled](state, action) {
      if (
        state.contacts.find(
          existingContact => existingContact.name === action.payload.name
        )
      ) {
        Notiflix.Notify.failure(
          `${action.payload.name} is already in your contacts`
        );
        return;
      } else {
        state.contacts.unshift(action.payload);
        state.isLoading = false;
        state.error = null;
        Notiflix.Notify.success(
          `${action.payload.name} has been successfully added to  your phonebook`
        );
      }
    },

    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

export default contactsSlice.reducer;
export const { sortByName, sortByAdded } = contactsSlice.actions;
