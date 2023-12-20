/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import FeedbackService from "../../Service/FeedbackService";
import "../../assets/styles/AdminFeedback.css";
import { Link, useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";

function AdminFeedback() {
  const [feedbackData, setfeedbackData] = useState([]);
  const user = localStorage.getItem("admin_email");
  const navigate = useNavigate();
  const service = new FeedbackService();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.getAllFeedback();
        setfeedbackData(response.data);
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
    <div className="feedback-aback">
      <Link to="/admin" className="feedback-title">
        <div className="feedback-title">Feedback Data</div>
      </Link>
      <div className="feedback-data-table">
        <table className="feedback-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Feedback</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map((feedback, index) => (
              <tr key={index}>
                <td>{feedback.email}</td>
                <td>{feedback.feedback}</td>
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

export default AdminFeedback;
