import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import s from "./Login.module.css";

const applySchema = Yup.object().shape({
  email: Yup.string()
    .required("Це поле обов'язкове!")
    .min(3, "Мінімум 3 символи!")
    .max(50, "Максимум 20 символів!"),
  password: Yup.string()
    .required("Це поле обов'язкове!")
    .min(3, "Мінімум 3 символи!")
    .max(50, "Максимум 20 символів!"),
});

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.name}`);
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
          <h1>Login</h1>
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
            Login
          </button>
          <p>
            No account? <Link to="/register">Register</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
