import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchContacts({ signal: abortController.signal }));
    return () => {
      abortController.abort();
    };
  }, [dispatch]);

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
              phone={item.number}
            />
          ))}
      </div>
    </div>
  );
}

export default ContactList;
