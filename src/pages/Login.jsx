import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";
import { TextField } from "../components/FormField.jsx";
import { isEmail, isRequired, runValidation } from "../utils/validators.js";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(false);
  const { loginWithEmail } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const errors = runValidation({ email }, {
      email: [[isRequired, "Email is required"], [isEmail, "Enter a valid email"]],
    });
    setError(errors.email ?? "");
    if (errors.email) return;

    const found = loginWithEmail(email);
    if (found) {
      navigate("/dashboard");
    } else {
      setNotFound(true);
    }
  }

  return (
    <>
      <PageHeader eyebrow="Member Portal" title="Login to your member dashboard" description="This demo supports one member session per device, saved locally." />
      <section className="mx-auto max-w-sm px-4 py-14 sm:px-6">
        <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-2xl border border-ink-100 bg-white p-6">
          <TextField
            id="login-email"
            type="email"
            label="Email address"
            required
            value={email}
            error={error}
            onChange={(e) => {
              setEmail(e.target.value);
              setNotFound(false);
            }}
          />
          {notFound && (
            <p role="alert" className="rounded-xl bg-gold-50 p-3 text-sm text-gold-600">
              No membership found for this email on this device. <Link to="/join" className="underline">Join FNP</Link> to create one.
            </p>
          )}
          <Button type="submit" variant="primary" size="lg" className="w-full">Login</Button>
          <p className="text-center text-sm text-ink-500">
            Not a member yet? <Link to="/join" className="font-semibold text-brand-500 hover:underline">Join FNP</Link>
          </p>
        </form>
      </section>
    </>
  );
}
