import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
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

  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      textDecorationColor: isActive ? "lime" : "black",
    };
  };

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/">
        <img src={eLearning} className="w-32" alt="eLearning Logo" />
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
          <span className="text-success">E</span>-Learning
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="mr-5">
        <NavLink to="/" className="text-xl" style={navLinkStyles} end>
          Home
        </NavLink>
        <NavLink to="/courses" className="text-xl" style={navLinkStyles}>
          Courses
        </NavLink>
        <NavLink to="/faq" className="text-xl" style={navLinkStyles}>
          FAQ
        </NavLink>
        <NavLink to="/blog" className="text-xl" style={navLinkStyles}>
          Blog
        </NavLink>
        {user ? (
          <>
            <div className="tooltip" data-tip={user?.displayName}>
              <Link to="/user">
                <div className="flex justify-center">
                  {user?.photoURL ? (
                    <img
                      className="w-7 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-7 rounded-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
                      alt=""
                    />
                  )}
                </div>
              </Link>
            </div>

            <button onClick={handleLogOut} className="text-xl">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="text-xl" style={navLinkStyles}>
              Sign In
            </NavLink>
            <NavLink to="/register" className="text-xl" style={navLinkStyles}>
              Sign Up
            </NavLink>
          </>
        )}
        <div className="flex justify-center">
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
