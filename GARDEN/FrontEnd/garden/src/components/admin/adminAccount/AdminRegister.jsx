import { useState } from "react";
import "../../../assets/styles/AdminRegister.css";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function AdminRegister() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    dob: "",
    email: "",
    password: "",
    experience: "NOT_AVAILABLE",
    size: "NOT_AVAILABLE",
    interest: "NOT_AVAILABLE",
    location: "NOT_AVAILABLE",
  });
  const [Errors, setErrors] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmpasswordError, setconfirmPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleInputChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }

    setEmailError("");
    return true;
  };

  const checkinput = (firstname, lastname, dob) => {
    if (firstname === "" && lastname === "" && dob === "") {
      setErrors("All fields are required.");
      return false;
    } else if (firstname === "") {
      setErrors("Firstname is required.");
      return false;
    } else if (lastname === "") {
      setErrors("Lastname is required.");
      return false;
    } else if (dob === "") {
      setErrors("Date of Birth is required.");
      return false;
    }

    setErrors("");
    return true;
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(phoneNumber)) {
      setMobileError("Please enter a valid 10-digit phone number");
      return false;
    }

    setMobileError("");
    return true;
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password: 8-15 characters, letters, numbers, and symbol."
      );
      return false;
    }

    setPasswordError("");
    return true;
  };
  const finalPassword = (password, confirmpassword) => {
    if (password != confirmpassword) {
      setconfirmPasswordError("Password does not match");
      return false;
    }

    setconfirmPasswordError("");
    return true;
  };

  const handleNext = () => {
    if (step === 1) {
      const isPhoneNumberValid = validatePhoneNumber(register.mobile);
      const isFilled = checkinput(
        register.firstName,
        register.lastName,
        register.dob
      );
      if (isPhoneNumberValid && isFilled) {
        setStep(step + 1);
      }
    } else if (step === 2) {
      const isEmailValid = validateEmail(register.email);
      const isPasswordValid = validatePassword(register.password);
      const isFinalPassword = finalPassword(
        register.password,
        register.confirmpassword
      );

      if (isEmailValid && isPasswordValid && isFinalPassword) {
        setStep(step + 1);
      }
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const postData = async (register) => {
    try {
      const response = await axios.post(
        "http://localhost:8989/garden/auth/admin/register",
        register,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postData(register)
      .then(() => {
        navigate("/admin");
        toast.success(
          "Admin is created successfully. Now Login to your Account"
        );
      })
      .catch((error) => {
        console.error("Error creating account:", error);
      });
  };

  return (
    <>
      <div className="register-page1">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-head">PerfectGarden</div>
          <div className="register-icon" />

          {step === 1 && (
            <>
              <div className="register-form-group">
                <center>
                  <h2>Personal Details</h2>
                </center>
                <label className="register-form-label" htmlFor="firstName">
                  First Name:
                </label>
                <input
                  className="register-form-input"
                  type="text"
                  placeholder="Enter your FirstName"
                  name="firstName"
                  value={register.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label className="register-form-label" htmlFor="lastName">
                  Last Name:
                </label>
                <input
                  className="register-form-input"
                  type="text"
                  placeholder="Enter your LastName"
                  name="lastName"
                  value={register.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label className="register-form-label" htmlFor="phoneno">
                  Phone Number:
                </label>
                <input
                  className="register-form-input"
                  type="number"
                  placeholder="Enter your Mobile Number"
                  name="mobile"
                  value={register.mobile}
                  onChange={handleInputChange}
                />
                {mobileError && (
                  <div className="register-form-error">{mobileError}</div>
                )}
              </div>
              <div className="register-form-group">
                <label className="register-form-label" htmlFor="dob">
                  Date of Birth:
                </label>
                <input
                  className="register-form-input"
                  type="date"
                  placeholder="Enter your Date Of Birth"
                  name="dob"
                  value={register.dob}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {Errors && <div className="register-form-error">{Errors}</div>}
            </>
          )}

          {step === 2 && (
            <>
              <div className="register-form-group">
                <center>
                  <h2>Account Details</h2>
                </center>
                <label className="register-form-label" htmlFor="email">
                  Email Address:
                </label>
                <input
                  className="register-form-input"
                  type="text"
                  placeholder="Enter your Email Address (UserName)"
                  name="email"
                  value={register.email}
                  onChange={handleInputChange}
                />
                {emailError && (
                  <div className="register-form-error">{emailError}</div>
                )}
              </div>
              <div className="register-form-group">
                <label className="register-form-label" htmlFor="password">
                  Password:
                </label>
                <input
                  className="register-form-input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create New Password"
                  name="password"
                  value={register.password}
                  onChange={handleInputChange}
                />
                <span
                  className="register-password-icon"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <RemoveRedEyeOutlinedIcon />
                  ) : (
                    <VisibilityOffOutlinedIcon />
                  )}
                </span>
                {passwordError && (
                  <div className="register-form-error">{passwordError}</div>
                )}
              </div>
              <div className="register-form-group">
                <label
                  className="register-form-label"
                  htmlFor="confirmpassword"
                >
                  Confirm Password:
                </label>
                <input
                  className="register-form-input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  name="confirmpassword"
                  value={register.confirmpassword}
                  onChange={handleInputChange}
                />
                {confirmpasswordError && (
                  <div className="register-form-error">
                    {confirmpasswordError}
                  </div>
                )}
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <div className="register-form-review">
                <h2>Review Your Information</h2>
                <div>
                  <strong>First Name:</strong> {register.firstName}
                </div>
                <div>
                  <strong>Last Name:</strong> {register.lastName}
                </div>
                <div>
                  <strong>Phone Number:</strong> {register.mobile}
                </div>
                <div>
                  <strong>Date of Birth:</strong> {register.dob}
                </div>
                <div>
                  <strong>Email Address:</strong> {register.email}
                </div>
              </div>
            </>
          )}

          <div className="register-form-group">
            {step < 3 && (
              <button
                type="button"
                className="register-form-control-btn"
                onClick={handleNext}
              >
                Next{"→"}
              </button>
            )}
            {step == 3 && (
              <button type="submit" className="register-form-control-btn">
                Create Account
              </button>
            )}
            {step > 1 && (
              <button
                type="button"
                className="register-form-control-btn"
                onClick={handlePrev}
              >
                Previous{"←"}
              </button>
            )}
          </div>
        </form>
      </div>
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

export default AdminRegister;
