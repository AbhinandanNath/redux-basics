import { useDispatch } from "react-redux";
import classes from "./Header.module.css";
import  {authActions} from '../store/authSlice'

const Header = ({ authState }) => {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(authActions.logout({name : "", password: ""}));
  }

  
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authState.isAuthenticated && (
        <nav>
          <ul>
            <li>
              <p>Welcome {authState.name.toUpperCase()}</p>
            </li>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
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
