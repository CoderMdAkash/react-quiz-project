import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Classes from "../styles/Account.module.css";

export default function Account() {
  const { currentUser, logout } = useAuth();

  return (
    <>
      <div className={Classes.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        {currentUser ? (
          <>
            <span>{currentUser.displayName}</span>
            <span
              className="material-icons-outlined"
              onClick={logout}
              title="Logout"
            >
              logout
            </span>
          </>
        ) : (
          <>
            <NavLink to="/signup">Signup</NavLink> /
            <NavLink to="/signin">Signin</NavLink>
          </>
        )}
      </div>
    </>
  );
}
