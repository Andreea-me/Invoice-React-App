import React from "react";
import { useState } from "react";
import Home from "./Home";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [home, setHome] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setHome(!home);
  };
  return (
    <div className="auth-form-container">
      {home ? (
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button type="submit">Log In</button>
          <button
            className="link-btn"
            onClick={() => props.onFormSwitch("register")}
          >
            Don't have an account? Register here.
          </button>
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default Login;
