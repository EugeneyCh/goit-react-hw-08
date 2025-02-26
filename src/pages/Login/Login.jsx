import s from "./Login.module.css";

const Login = () => {
  return (
    <div className={s.login}>
      <h1>Login</h1>
      <form method="post">
        <input type="text" name="u" placeholder="Username" required />
        <input type="password" name="p" placeholder="Password" required />
        <button
          type="submit"
          className={`${s.btn} ${s.btnPrimary} ${s.btnBlock} ${s.btnLarge}`}
        >
          Let me in.
        </button>
      </form>
    </div>
  );
};

export default Login;
