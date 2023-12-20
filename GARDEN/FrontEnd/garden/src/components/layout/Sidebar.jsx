/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/Sidebar.css";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../redux/userSlice";

function Sidebar({ isOpen, onClose }) {
  const sidebarRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    onClose();
  };
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`} ref={sidebarRef}>
        <Link to="/profile">
          <button onClick={()=>onClose()}>Profile</button>
        </Link>
        <Link to="/dashboard">
          <button onClick={()=>onClose()}>Dashboard</button>
        </Link>
        <Link to="/contact">
          <button onClick={()=>onClose()}>Feedback</button>
        </Link>
        <Link to="/faq">
          <button onClick={()=>onClose()}>FAQs</button>
        </Link>
        <Link to="/call">
          <button onClick={()=>onClose()}>Contact</button>
        </Link>
        <span>
          {user.user && user.user.username ? (
            <button onClick={handleLogout}>LOGOUT</button>
          ) : (
            <Link to="/login">
              <button onClick={()=>onClose()}>LOGIN</button>
            </Link>
          )}
        </span>
      </div>
    </>
  );
}

export default Sidebar;
