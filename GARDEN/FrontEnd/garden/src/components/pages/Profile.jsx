/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import "../../assets/styles/Profile.css";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import UserService from "../../Service/UserService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Profile() {
  const service = new UserService();
  const user = useSelector(selectUser);
  let isLoggedIn = false;
  const [CurrentUser, setCurrentUser] = useState("");
  const GetUser = async () => {
    try {
      const email = localStorage.getItem("email");
      const response = await service.getUserByEmail(email);
      setCurrentUser(response.data);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  if (user.username || user.user.username) {
    isLoggedIn = true;
    useEffect(() => {
      GetUser();
    }, []);
  }
  return (
    <div className="pro-back">
      {isLoggedIn ? (
        <div className="user-details">
          <center>
            <h2>USER DETAILS</h2>
          </center>
          <div className="user-info">
            <p>
              <strong>Email:&emsp;</strong>
              {CurrentUser.email}
            </p>
            <p>
              <strong>First Name:&emsp;</strong>
              {CurrentUser.firstName}
            </p>
            <p>
              <strong>Last Name:&emsp;</strong>
              {CurrentUser.lastName}
            </p>
            <p>
              <strong>Date of Birth:&emsp;</strong>
              {CurrentUser.dob}
            </p>
            <p>
              <strong>Phone Number:&emsp;</strong>
              {CurrentUser.mobile}
            </p>
            <p>
              <strong>Location:&emsp;</strong>
              {CurrentUser.location}
            </p>
            <p>
              <strong>Gender:&emsp;</strong>
              {CurrentUser.gender}
            </p>
            <p>
              <strong>Experience:&emsp;</strong>
              {CurrentUser.experience}
            </p>
            <p>
              <strong>Garden Size:&emsp;</strong>
              {CurrentUser.size}
            </p>
            <p>
              <strong>Interest:&emsp;</strong>
              {CurrentUser.interest}
            </p>
            <button className="s-button">Setting</button>
          </div>
        </div>
      ) : (
        <div className="user-details1">
          <center>
            <h2>USER DETAILS</h2>
            <p>Login to display the information.</p>
            <Link to="/login">
              <button className="l-button">Login</button>
            </Link>
          </center>
        </div>
      )}
    </div>
  );
}

export default Profile;
