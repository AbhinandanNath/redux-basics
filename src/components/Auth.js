import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Auth = () => {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.email.value;
    const password = event.target.password.value;
    if (name !== "" && password !== "") {
      dispatch(authActions.login({ name, password }));
    } else {
      alert("Inavlid name and password");
    }
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
