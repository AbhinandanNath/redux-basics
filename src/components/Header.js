import { useDispatch } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../store/authSlice";

const Header = ({ authState }) => {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(authActions.logout({ name: "", password: "" }));
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authState.isAuthenticated && (
        <nav>
          <ul>
            <li>
              <p style={{ textTransform: "capitalize" }}>
                Welcome {authState.name.split("@")[0]}
              </p>
            </li>
            <li>
              <p href="/">My Products</p>
            </li>
            <li>
              <p href="/" ar>
                My Sales
              </p>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
