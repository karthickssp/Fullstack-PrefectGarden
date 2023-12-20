import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../redux/userSlice";
import "../../assets/styles/Header.css";
import Sidebar from "./Sidebar";

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [click, setClick] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div
            className={`menu-toggle ${showSidebar ? "open" : ""}`}
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={showSidebar ? faTimes : faBars} />
          </div>
          <Sidebar isOpen={showSidebar} onClose={toggleSidebar} />

          <div className="nav-logo">PERFECTGARDEN</div>
          <div
            className={`nav-icon ${click ? "active" : ""}`}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-links ${
                  location.pathname === "/" ? "active" : ""
                }`}
                onClick={handleClick}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/explore"
                className={`nav-links ${
                  location.pathname === "/explore" ? "active" : ""
                }`}
                onClick={handleClick}
              >
                EXPLORE
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/journal"
                className={`nav-links ${
                  location.pathname === "/journal" ? "active" : ""
                }`}
                onClick={handleClick}
              >
                JOURNALS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-links ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                onClick={handleClick}
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              {user.user && user.user.username ? (
                <Link
                  to="/privacy"
                  className={`nav-links ${
                    location.pathname === "/privacy" ? "active" : ""
                  }`}
                  onClick={handleClick}
                >
                  PRIVACY
                </Link>
              ) : (
                <Link
                  to="/login"
                  className={`nav-links ${
                    location.pathname === "/login" ? "active" : ""
                  }`}
                  onClick={handleClick}
                >
                  LOGIN
                </Link>
              )}
            </li>
            <li className="nav-item">
              {user.user && user.user.username ? (
                <Link className="nav-links" onClick={handleLogout}>
                  LOGOUT
                </Link>
              ) : (
                <Link
                  to="/register"
                  className={`nav-links ${
                    location.pathname === "/register" ? "active" : ""
                  }`}
                  onClick={handleClick}
                >
                  REGISTER
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Header;
