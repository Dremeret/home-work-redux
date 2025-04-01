import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import css from './ContactCounter.module.css';

export const ContactCounter = () => {
  const contacts = useSelector(getContacts);

  const count = contacts.reduce(
    (acc, contact) => {
      if (contact.favourites) {
        acc.favourites += 1;
      } else {
        acc.default += 1;
      }
      return acc;
    },
    { default: 0, favourites: 0 }
  );

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Default: {count.default}</p>
      <p className={css.text}>Favourites: {count.favourites}</p>
    </div>
  );
};
