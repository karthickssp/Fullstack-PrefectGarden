/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import ContactService from "../../Service/ContactService";
import "../../assets/styles/AdminContact.css";
import { Link, useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";

function AdminContact() {
  const [contactData, setContactData] = useState([]);
  const user = localStorage.getItem("admin_email");
  const navigate = useNavigate();
  const service = new ContactService();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.getAllContact();
        setContactData(response.data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };
    if (user) {
      fetchData();
    } else {
      alert("Login First!!!");
      navigate("/admin");
    }
  }, []);
  return (
    <div className="contact-aback">
      <Link to="/admin" className="contact-title">
        <div className="contact-title">Contact Us Data</div>
      </Link>
      <div className="contact-us-table">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Mobile</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((contact, index) => (
              <tr key={index}>
                <td>{contact.email}</td>
                <td>{contact.mobile}</td>
                <td>{contact.message}</td>
                <td>
                  <Switch />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminContact;
