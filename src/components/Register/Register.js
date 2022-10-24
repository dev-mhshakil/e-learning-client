import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <div className="register-box">
        <h3>Sign Up</h3>
        <form className="login-form">
          <input type="text" name="name" placeholder="Name" required />
          <input type="text" name="photoURL" placeholder="Photo URL" required />
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
        <button className="btn-register">Login</button>
        <p className="create-acc-sec">
          Already have an account?
          <Link className="create-acc-text underline ml-2">Login</Link>
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

export default Register;
