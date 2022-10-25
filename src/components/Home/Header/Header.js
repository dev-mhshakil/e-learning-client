import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import eLearning from "../../../assets/images/eLearning.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Navbar } from "flowbite-react";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error("error", error));
  };

  return (
    <Navbar fluid={true} rounded={true} className="text">
      <Navbar.Brand href="/">
        <img src={eLearning} className="w-32" alt="eLearning Logo" />
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
          E-Learning
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="mr-5">
        <Link to="/" className="text-xl">
          Home
        </Link>
        <Link to="/courses" className="text-xl">
          Courses
        </Link>
        <Link to="/blog" className="text-xl">
          Blog
        </Link>
        {user ? (
          <>
            <p className="text-xl">{user?.displayName}</p>
            <img className="w-7 rounded-full" src={user?.photoURL} alt="" />
            <Link onClick={handleLogOut} className="text-xl">
              Sign Out
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="text-xl">
              Sign In
            </Link>
            <Link to="/register" className="text-xl">
              Sign Up
            </Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
