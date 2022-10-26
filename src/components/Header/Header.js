import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import eLearning from "../../assets/images/eLearning.png";
import { AuthContext } from "../../contexts/AuthProvider";
import { Navbar } from "flowbite-react";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error("error", error));
  };

  return (
    <Navbar fluid={true} rounded={true}>
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
            <div className="tooltip" data-tip={user?.displayName}>
              <img className="w-7 rounded-full" src={user?.photoURL} alt="" />
            </div>

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
        <div className="flex">
          <label
            htmlFor="Toggle2"
            className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
          >
            <span>Light</span>
            <span className="relative">
              <input id="Toggle2" type="checkbox" className="hidden peer" />
              <div className="w-10 h-4 rounded-full shadow bg-gray-600 peer-checked:dark:bg-violet-400"></div>
              <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-success"></div>
            </span>
            <span>Dark</span>
          </label>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
