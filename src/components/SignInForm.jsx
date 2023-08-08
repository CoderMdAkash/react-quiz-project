import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import Form from "../components/Form.jsx";
import Info from "../components/Info.jsx";
import TextInput from "../components/TextInput.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";
import Classes from "../styles/SignIn.module.css";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failded To Login!");
    }
  }

  return (
    <>
      <Form className={`${Classes.login}`} onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
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

        <Button type="submit" disabled={loading}>
          <span>Submit now</span>
        </Button>

        <Info>
          Don`t have an account? <NavLink to="/signup">Signup</NavLink> instead.
        </Info>
      </Form>
    </>
  );
}
