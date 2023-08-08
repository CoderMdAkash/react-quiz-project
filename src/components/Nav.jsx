import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo-bg.png";
import Classes from "../styles/Nav.module.css";
import Account from "./Account.jsx";

export default function Nav() {
  return (
    <>
      <nav className={Classes.nav}>
        <ul>
          <li>
            <NavLink to="/" className={Classes.brand}>
              <img src={Logo} alt="Learn with Sumit Logo" />
              <h3>Learn with Sumit</h3>
            </NavLink>
          </li>
        </ul>
        <Account />
      </nav>
    </>
  );
}
