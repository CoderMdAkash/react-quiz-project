import image from "../assets/images/signup.svg";
import Illustration from "../components/Illustration.jsx";
import SignUpForm from "../components/SignUpForm.jsx";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={image} />
        <SignUpForm />
      </div>
    </>
  );
}
