import "../../assets/styles/Dashboard.css";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import Plantveiw from "./Plantveiw";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";


const Dashboard = () => {
  const user = useSelector(selectUser);
  const username =
    user.user && user.user.username ? user.user.username : "Guest";
  const isLoggedIn = user.user && user.user.username;
  useEffect(() => {
    const notificationTimer = setInterval(() => {
      toast("Water the plant");
    }, 5000); 

    return () => {
      clearInterval(notificationTimer);
    };
  }, []);


  return (
    <>
        {isLoggedIn ? (
          <div className="dash-back-out">
          <div className="head-bar-out">
            <div className="hh2">
              Dashboard of <span>{username}</span>
            </div>
            <h2>Hello Gardener!!!</h2>
            <h5>Plants and Tasks </h5>
            <br />
            <Plantveiw />
            <Modal className="motioncard" />
          </div>
          </div>
        ) : (
          <div className="dash-back">
          <div className="head-bar">
             <center> <h2>DASHBOARD</h2></center>
              <p>Login to display the information.</p>
              <Link to="/login">
                <button className="lbutton">Login</button>
              </Link>
          </div>
          </div>
        )}
      </>
  );
};

export default Dashboard;
