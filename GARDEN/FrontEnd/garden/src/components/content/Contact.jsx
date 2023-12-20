import { useState } from "react";
import { toast } from "react-toastify";
import "../../assets/styles/Contactus.css";
import ContactService from "../../Service/ContactService";

function Contact() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const details = { email, mobile, message };
  const service = new ContactService();

  const storeContact = async (details) => {
    try {
      await service.saveContact(details);
      return true;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!mobile.trim()) {
      validationErrors.mobile = "Mobile Number is required";
    }
    if (!message.trim()) {
      validationErrors.message = "Message is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (storeContact(details)) {
        toast.success("Successfully Submitted");
        setEmail("");
        setMobile("");
        setMessage("");
      }
    }
  };

  return (
    <div className="contact-back">
      <div className="contact-form">
        <div className="container" id="contact-container">
          <div className="main">
            <div className="content">
              <h2>Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    id="contact-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                  />
                  <h6 className="error">
                    {errors.email && <span>{errors.email}</span>}
                  </h6>
                </div>
                <div>
                  <input
                    id="contact-input"
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter Your Mobile"
                  />
                  <h6 className="error">
                    {errors.mobile && <span>{errors.mobile}</span>}
                  </h6>
                </div>
                <div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                  ></textarea>
                  <h6 className="error">
                    {errors.message && <span>{errors.message}</span>}
                  </h6>
                </div>
                <button type="submit" className="btn">
                  Send
                </button>
              </form>
            </div>
            <div className="form-img">
              <img
                src="https://images.pexels.com/photos/4831/hands-coffee-smartphone-technology.jpg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
