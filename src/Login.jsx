import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "./validation";

export const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const users = [{ email: "dinu@gmail.com", password: "testpassword" }];

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation({ email, password }));

    const account = users.find((user) => user.email === email);
    if (account && account.password === password) {
      navigate("/home");
    }
  };

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          className="signUpInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <label htmlFor="password">Password</label>
        <input
          className="signUpInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <button type="submit" className="button">
          Log In
        </button>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register here.
        </button>
      </form>
    </div>
  );
};

export default Login;
