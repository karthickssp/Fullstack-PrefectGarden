import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/AdminLogin.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { toast } from "react-toastify";
import axios from "axios";

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }
  return "";
};

const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;

  if (!passwordRegex.test(password)) {
    return "Password: 8-15 characters, letters, numbers, and symbol.";
  }

  return "";
};

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const logincredentials = { email, password };

  const authenticateUser = async () => {
    try {
      const response = await axios.post("http://localhost:8989/garden/auth/admin/authenticate",logincredentials)
      const token = response.data.token;
      console.log("Token:", token);
      localStorage.setItem("admin_auth", token);
      localStorage.setItem("admin_email", email);
      return token;
    } catch (error) {
      console.error("Error:", error);
      setError("Invalid Email or Password");
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (email === "" && password === "") {
      setError("Username and Password are required.");
    } else if (email === "") {
      setError("Username is required.");
    } else if (password === "") {
      setError("Password is required.");
    } else if (emailError || passwordError) {
      setError(emailError || passwordError);
    } else {
      const token = await authenticateUser();
      if (token == null) {
        setError("Invalid Username or Password");
        return;
      } else {
        navigate("/admin/");
        toast.success("Login Successful");
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="login-page">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="login-head">PerfectGarden</h1>
          <div className="login-icon" />

          <div className="login-form-group">
            <label className="login-form-label" htmlFor="username">
              Email:
            </label>
            <input
              className="login-form-input"
              type="text"
              placeholder="Enter Your Email ID"
              name="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="username"
            />
          </div>
          <div className="login-form-group">
            <label className="login-form-label" htmlFor="password">
              Password:
            </label>
            <input
              className="login-form-input"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
            <div className="login-password-icon" onClick={toggleShowPassword}>
              {showPassword ? (
                <RemoveRedEyeOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </div>
          </div>
          {error && <span className="login-form-error">{error}</span>}
          <button type="submit" className="login-form-login-btn">
            LOGIN
          </button>
        </form>
      </div>
    </>
  );
}

export default AdminLogin;
