import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { googleSignIn, signIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.error("error", error));
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error("error", error));
  };

  return (
    <div>
      <div className="login-box">
        <h3>Login</h3>
        <form onSubmit={handleSubmit} className="login-form">
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
          <button className="btn-login" type="submit">
            Login
          </button>
        </form>
        <div className="forget-section">
          <div>
            <input type="checkbox" className="mr-3" />
            <label htmlFor="">Remember Me</label>
          </div>
          <Link className="forget-password underline">Forget Password</Link>
        </div>

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
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center"
        >
          <FcGoogle></FcGoogle>
          <span className="ml-2">Continue with Google</span>
        </button>
        <button className="flex items-center justify-center">
          <FaGithub></FaGithub>
          <span className="ml-2">Continue with GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
