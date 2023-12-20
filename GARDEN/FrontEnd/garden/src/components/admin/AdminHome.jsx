import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import adminlogin from "../../assets/images/adminlogin.jpeg";
import adminregister from "../../assets/images/adminregister.jpg";
import manage from "../../assets/images/manage.jpeg";
import contact from "../../assets/images/contactas.jpeg";
import feedback from "../../assets/images/feedback.png";
import "../../assets/styles/AdminHome.css";
function AdminHome() {
  const navigate = useNavigate();
  const user = localStorage.getItem("admin_email");
  const logout = () => {
    localStorage.removeItem("admin_email");
    localStorage.removeItem("admin_auth");
    toast.success("Logout Successful");
    navigate("/admin");
  };
  return (
    <>
      <section className="admin-background">
        <div className="admin-list">
          <div className="admin-card">
            <img src={adminlogin} alt="Login" className="admin-image" />
            {user ? (
              <button className="button" onClick={logout}>
                LOGOUT
              </button>
            ) : (
              <Link to="/admin/login">
                <button className="button">LOGIN</button>
              </Link>
            )}
          </div>
          <div className="admin-card">
            <img src={adminregister} alt="Register" className="admin-image" />
            <Link to="/admin/register">
              <button className="button">REGISTER</button>
            </Link>
          </div>
          <div className="admin-card">
            <img src={manage} alt="plant" className="admin-image" />
            <Link to="/admin/get">
              <button className="button">MANAGE PLANT</button>
            </Link>
          </div>
          <div className="admin-card">
            <img src={contact} alt="Contact" className="admin-image" />
            <Link to="/admin/contact">
              <button className="button">CONTACT</button>
            </Link>
          </div>
          <div className="admin-card">
            <img src={feedback} alt="Feedback" className="admin-image" />
            <Link to="/admin/feedback">
              <button className="button">FEEDBACK</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminHome;
