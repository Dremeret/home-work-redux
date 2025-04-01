import { combineReducers } from 'redux';
import { statusFilters } from './constants';

const contactsInitialState = [
  { id: 0, text: 'Максим', favourites: false },
  { id: 1, text: 'Віка', favourites: false },
  { id: 2, text: 'Денис', favourites: false },
  { id: 3, text: 'Іван', favourites: false },
  { id: 4, text: 'Арсен', favourites: false },
];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    case 'contacts/toggleFavourites':
      return state.map(contact => {
        if (contact.id !== action.payload) {
          return contact;
        }
        return { ...contact, favourites: !contact.favourites };
      });
    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
