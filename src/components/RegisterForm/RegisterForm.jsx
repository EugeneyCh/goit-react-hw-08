import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import s from "./RegisterForm.module.css";
import { Link } from "react-router-dom";

const applySchema = Yup.object().shape({
  name: Yup.string()
    .required("Це поле обов'язкове!")
    .min(3, "Мінімум 3 символи!")
    .max(50, "Максимум 20 символів!"),
  email: Yup.string()
    .required("Це поле обов'язкове!")
    .min(3, "Мінімум 3 символи!")
    .max(50, "Максимум 20 символів!"),
  password: Yup.string()
    .required("Це поле обов'язкове!")
    .min(3, "Мінімум 3 символи!")
    .max(50, "Максимум 20 символів!"),
});

const RegisterForm = () => {
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.email}`);
        navigate("/contacts", { replace: true });
      })
      .catch(() => toast.error("Invalid data"));

    options.resetForm();
  };
  return (
    <div className={s.login}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={applySchema}
      >
        <Form className="form">
          <h1>Register</h1>
          <label>
            <span>Name:</span>
            <Field name="name" />
          </label>
          <label>
            <span>Email:</span>
            <Field name="email" type="email" />
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password" />
          </label>
          <button
            className={`${s.btn} ${s.btnPrimary} ${s.btnBlock} ${s.btnLarge}`}
            type="submit"
          >
            Register
          </button>
          <p>
            Do you have an account? <Link to="/login">Login</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
