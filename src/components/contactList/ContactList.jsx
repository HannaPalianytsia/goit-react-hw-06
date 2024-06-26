import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import styles from "./ContactList.module.css";
import { selectContacts, selectFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={styles.contactList}>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id} className={styles.card}>
          <Contact number={number} name={name} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
