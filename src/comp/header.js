import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import {useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/config";
import {  signOut } from "firebase/auth";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const {theme,changeTheme} = useContext(ThemeContext);
  return (
    <><div className="myheader">
      <header className="hide-when-mobile baker">
        <h1>
          <Link to="/">baker dandal</Link>
        </h1>
        <button class="theme-btn" onClick={() => {
          changeTheme(theme === "dark" ? "light" : "dark");
        } }>{theme}</button>
        <ul className="flex">
          {user && <li className="main-list">
            <NavLink className="main-link" to="/profile">
              profile
            </NavLink>
          </li>}
          {user && <li className="main-list">
            <NavLink className="main-link" to="/about">
              about
            </NavLink>
          </li>}
          {!user && <li className="main-list">
            <NavLink className="main-link" to="/signin">
              sign-in
            </NavLink>
          </li>}
          {!user && <li className="main-list">
            <NavLink className="main-link" to="/signup">
              sign-up
            </NavLink>
          </li>}
          {user && <li onClick={() => {
            signOut(auth).then(() => {
              // Sign-out successful.
            }).catch((error) => {
              // An error happened.
            });
          } } className="main-list">
            <button className="main-link signout">
              sign-out
            </button>
          </li>}
        </ul>
      </header>
    </div><header className="show-when-mobile baker">
        <h1>abou_dandal8</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input className="ok" id="burger" type="checkbox" />
        <div className="show-on-click">

          <ul class="flex-1">
            {!user && <li className="main-div">
              <NavLink className="main-link" to="/signin">
                sign-in
              </NavLink>
            </li>}
            {!user && <li className="main-div">
              <NavLink className="main-link" to="/signup">
                sign-up
              </NavLink>
            </li>}
            {user && <li className="main-list">
            <NavLink className="main-link" to="/profile">
              profile
            </NavLink>
          </li>}
          {user && <li className="main-list">
            <NavLink className="main-link" to="/about">
              about
            </NavLink>
          </li>}
          {user && <li onClick={() => {
            signOut(auth).then(() => {
              // Sign-out successful.
            }).catch((error) => {
              // An error happened.
            });
          } } className="main-list">
            <button className="main-link signout">
              sign-out
            </button>
          </li>}
          </ul>
        </div>
      </header></>
  );
};

export default Header;