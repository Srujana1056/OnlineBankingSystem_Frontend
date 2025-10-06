import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

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

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8003/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username.trim(),
          password: form.password.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Invalid username or password");
      }

      console.log("Login success:", result);
      localStorage.setItem("ysk_bank_user", JSON.stringify(result));
      navigate("/"); // Redirect to dashboard/home
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card" role="form" aria-labelledby="loginTitle">
        <div className="auth-header">
          <div className="auth-logo" aria-hidden>🏦</div>
          <div id="loginTitle" className="auth-title">Log in to your account</div>
        </div>

        {error && <div className="auth-error" role="alert">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className={errors.username ? "has-error" : ""}>
            <label className="auth-label" htmlFor="username">Username</label>
            <input
              className="auth-input"
              id="username"
              type="text"
              autoComplete="username"
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
              autoComplete="current-password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            {errors.password && <div id="password-error" className="auth-error">{errors.password}</div>}
          </div>

          <div className="auth-utility-row">
            <Link className="auth-link auth-small" to="#">Forgot your password?</Link>
            <Link className="auth-link auth-small" to="#">Request OTP</Link>
          </div>

          <button type="submit" className="auth-submit" disabled={submitting}>
            {submitting ? "Signing in…" : "Log In"}
          </button>
        </form>

        <div className="auth-footer auth-small">
          New here? <Link className="auth-link" to="/signup">Create account</Link>
        </div>
      </div>
    </div>
  );
}
