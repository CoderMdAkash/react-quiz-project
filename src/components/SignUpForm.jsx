import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import Checkbox from "../components/Checkbox.jsx";
import Form from "../components/Form.jsx";
import Info from "../components/Info.jsx";
import TextInput from "../components/TextInput.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";
import Classes from "../styles/Signup.module.css";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password do'n Not Match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failded To Account Created!");
    }
  }

  return (
    <>
      <Form className={`${Classes.signup}`} onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <TextInput
          type="text"
          required
          placeholder="Enter name"
          icon="person"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput
          required
          type="email"
          placeholder="Enter email"
          icon="alternate_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          required
          type="password"
          placeholder="Enter password"
          icon="lock"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextInput
          required
          type="password"
          placeholder="Confirm password"
          icon="lock_clock"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Checkbox
          required
          type="checkbox"
          text="I agree to the Terms & Conditions"
          value={agree}
          onChange={(e) => setAgree(e.target.value)}
        />
        <Button type="submit" disabled={loading}>
          <span>Submit now</span>
        </Button>

        <Info>
          Already have an account? <NavLink to="/signin">Login</NavLink>{" "}
          instead.
        </Info>
      </Form>
    </>
  );
}
