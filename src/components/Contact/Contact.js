import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact, toggleFavourites } from '../../redux/actions';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  const handleToggle = () => dispatch(toggleFavourites(contact.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={contact.favourites}
        onChange={handleToggle}
      />
      <p className={css.text}>{contact.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
