import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { FaUserLarge, FaPhone } from "react-icons/fa6";
import { deleteContact } from "../../redux/contactsOps";

function Contact({ name, phone, id }) {
  const dispatch = useDispatch();
  return (
    <div className={s.contact}>
      <div>
        <p>
          <FaUserLarge className={s.icon} size="20" /> {name}
        </p>
        <p>
          <FaPhone className={s.icon} size="20" /> {phone}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  );
}

export default Contact;
