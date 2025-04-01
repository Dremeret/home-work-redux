import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { getContacts, getStatusFilter } from '../../redux/selectors';
import css from './ContactList.module.css';

const getVisibleContacts = (contacts, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.default:
      return contacts.filter(contact => !contact.favourites);
    case statusFilters.favourites:
      return contacts.filter(contact => contact.favourites);
    default:
      return contacts;
  }
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getStatusFilter);
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
