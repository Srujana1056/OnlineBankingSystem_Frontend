// src/services/auth.js

// 🔹 Token utilities
export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  return !!getToken();
};

// 🔹 Login API
export const login = async (customerId, password) => {
  const response = await fetch("http://localhost:8003/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ customerId, password }),
  });

  if (!response.ok) {
    throw new Error("Invalid credentials");
  }

  const data = await response.json();
  setToken(data.token);
  return data;
};

// 🔹 Signup API
export const signup = async (formData) => {
  const response = await fetch("http://localhost:8003/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData), // send the whole signup form
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(errText || "Signup failed");
  }

  const data = await response.json();

  // Optionally store token if backend sends it
  if (data.token) {
    setToken(data.token);
  }

  return data;
};
