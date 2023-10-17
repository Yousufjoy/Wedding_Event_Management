import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
  const AuthInfo = useContext(AuthContext);
  const { user, logOut } = AuthInfo;

  const navLinks = (
    <>
      <li>
        <NavLink className="lg:text-[#C3937C] lg:text-lg" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="lg:text-[#C3937C] lg:text-lg" to="/blog">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink className="lg:text-[#C3937C] lg:text-lg" to="/contact">
          Contact Us!
        </NavLink>
      </li>
      {/* "Login" link for small screens */}
    </>
  );

  const handleSignOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="lg:text-2xl text-black">BlissfulEvents</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <p> {user.email}</p>
            <button onClick={handleSignOut} className="btn ">
              Sign Out
            </button>
            <img
              className="w-[50px] h-[50px] "
              referrerPolicy="no-referrer"
              src={user.photoURL}
              alt=""
            />
          </>
        ) : (
          <Link to="/login">
            <button className="btn mr-[20px]">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
