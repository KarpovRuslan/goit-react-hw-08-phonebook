export const selectContacts = state => state.contactsReducer.items;

export const selectIsLoading = state => state.contactsReducer.isLoading;

export const selectError = state => state.contactsReducer.error;

export const selectFilterValue = state => state.contactsReducer.filter;
