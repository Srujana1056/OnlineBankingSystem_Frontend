import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  function validate(values) {
    const next = {};
    if (!values.username.trim()) next.username = "Enter your username";
    if (!values.password.trim()) next.password = "Enter your password";
    return next;
  }

  function handleChange(e) {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors(prev => ({ ...prev, [id]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8003/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username.trim(),
          password: form.password.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Signup failed. Please try again.");
      }

      console.log("Signup success:", result);

      // Save user data locally
      localStorage.setItem("ysk_bank_user", JSON.stringify(result));

      // Redirect to login page
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card" role="form" aria-labelledby="signupTitle">
        <div className="auth-header">
          <div className="auth-logo" aria-hidden>🏦</div>
          <div id="signupTitle" className="auth-title">Create a new account</div>
        </div>

        {error && <div className="auth-error" role="alert">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className={errors.username ? "has-error" : ""}>
            <label className="auth-label" htmlFor="username">Username</label>
            <input
              className="auth-input"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={form.username}
              onChange={handleChange}
              aria-invalid={Boolean(errors.username)}
              aria-describedby={errors.username ? "username-error" : undefined}
            />
            {errors.username && <div id="username-error" className="auth-error">{errors.username}</div>}
          </div>

          <div className={errors.password ? "has-error" : ""}>
            <label className="auth-label" htmlFor="password">Password</label>
            <input
              className="auth-input"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            {errors.password && <div id="password-error" className="auth-error">{errors.password}</div>}
          </div>

          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? "Signing up…" : "Sign Up"}
          </button>
        </form>

        <div className="auth-footer auth-small">
          Already have an account? <a href="/login">Log in</a>
        </div>
      </div>
    </div>
  );
}
