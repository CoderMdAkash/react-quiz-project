import image from "../assets/images/login.svg";
import Illustration from "../components/Illustration.jsx";
import SignIn from "../components/SignInForm.jsx";

export default function Signin() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={image} />
        <SignIn />
      </div>
    </>
  );
}
