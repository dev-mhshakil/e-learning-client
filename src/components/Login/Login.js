import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="login-box">
        <h3>Login</h3>
        <form className="login-form">
          <input
            type="email"
            name="email"
            placeholder="UserName or Email"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </form>
        <div className="forget-section">
          <div>
            <input type="checkbox" className="mr-3" />
            <label htmlFor="">Remember Me</label>
          </div>
          <Link className="forget-password underline">Forget Password</Link>
        </div>
        <button className="btn-login">Login</button>
        <p className="create-acc-sec">
          Don't have an account?{" "}
          <Link className="create-acc-text">Create an sccount</Link>
        </p>
      </div>

      <div className="divide-section flex items-center mt-10 justify-center">
        <hr />
        <p className="px-4">or</p>
        <hr />
      </div>
      <div className="login-with-popup flex flex-col gap-4 items-center mt-5">
        <button>Continue with Google</button>
        <button>Continue with GitHub</button>
      </div>
    </div>
  );
};

export default Login;
