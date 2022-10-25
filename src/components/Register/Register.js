import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const { googleSignIn, emailSignUp } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photoURL, email, password);

    emailSignUp(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.log("error", error));
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
      <div className="register-box">
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit} className="login-form">
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
          <button className="btn-register" type="submit">
            Sign Up
          </button>
        </form>

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
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center"
        >
          <FcGoogle></FcGoogle>
          <span className="ml-2">Continue with Google</span>
        </button>
        <button
          className="flex items-center justify-center mb-20"
          type="submit"
        >
          <FaGithub></FaGithub>
          <span className="ml-2">Continue with GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
