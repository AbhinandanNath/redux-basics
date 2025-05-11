import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.authReducer);
  console.log(authActions);

  const btnName = authState.isAuthenticated ? "Logout" : "Login";

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.email.value;
    const password = event.target.password.value;
    dispatch(btnName === "Login" ? authActions.login({name, password}) : authActions.logout({name : "", password: ""}));
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
          <button>{btnName}</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;


