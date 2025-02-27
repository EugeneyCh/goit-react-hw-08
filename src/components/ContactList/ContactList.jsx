import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
// import { selectFilteredContacts } from "../../redux/contactsSlice";

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      <div className={s.container}>
        {filteredContacts
          .slice()
          .reverse()
          .map((item) => (
            <Contact
              key={item.id}
              id={item.id}
              name={item.name}
              phone={item.phone}
            />
          ))}
      </div>
    </div>
  );
}

export default ContactList;
