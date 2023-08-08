import Classes from "../styles/Laouts.module.css";
import Nav from "./Nav.jsx";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={Classes.main}>
        <div className={Classes.container}>{children}</div>
      </main>
    </>
  );
}
