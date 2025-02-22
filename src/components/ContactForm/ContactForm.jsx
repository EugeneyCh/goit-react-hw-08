import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;

const onlyNumbersWithDashBetween = /^\d+(-\d+)*$/;
const applySchema = Yup.object().shape({
  username: Yup.string()
    .required("Це поле обов'язкове!")
    .min(3, "Мінімум 3 символи!")
    .max(50, "Максимум 20 символів!")
    .matches(onlyLetters, "Тільки літери!"),
  phoneNumber: Yup.string()
    .required("Це поле обов'язкове!")
    .min(3, "Мінімум 3 символи!")
    .max(50, "Максимум 20 символів!")
    .matches(
      onlyNumbersWithDashBetween,
      "Тільки цифри у форматі ХХХ-ХХХ-ХХХ !"
    ),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    username: "",
    phoneNumber: "",
  };

  const usernameFieldId = useId();
  const phoneNumberFieldId = useId();
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      phone: values.phoneNumber,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={applySchema}
    >
      <Form className={s.form}>
        <label htmlFor={usernameFieldId}>Name</label>
        <Field
          className={s.field}
          type="text"
          name="username"
          id={usernameFieldId}
        />
        <ErrorMessage className={s.error} component="p" name="username" />
        <label htmlFor={phoneNumberFieldId}>Number</label>
        <Field
          className={s.field}
          type="phone"
          name="phoneNumber"
          id={phoneNumberFieldId}
        />
        <ErrorMessage className={s.error} component="p" name="phoneNumber" />
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
