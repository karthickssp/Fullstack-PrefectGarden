import "../../assets/styles/Contact.css";
import Feedback from "./Feedback";
import { motion } from "framer-motion";
function Contactus() {
  return (
    <>
      <div className="twocontainer">
        <center>
          <motion.div
            layout
            className="card"
            style={{ borderRadius: "1rem" }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="card-top" layout="position">
              <div className="card-top__header">
                <h1>Contact Us!</h1>
              </div>
            </motion.div>

            <motion.div
              className="card-content"
              initial={{ clipPath: "circle(0% at 0 0)" }}
              animate={{ clipPath: "circle(140.9% at 0 0)" }}
              transition={{
                duration: 0.5,
                delay: 0.25,
                type: "spring",
                damping: 25,
                stiffness: 100,
              }}
            >
              <p className="cp">
                <i className="bx bxs-home-smile"></i> Coimbatore,Tamil Nadu
              </p>
              <p className="cp">
                <i className="bx bx-envelope"></i> perfectgarden@gmail.com
              </p>
              <p className="cp">
                <i className="bx bx-phone"></i> +91 68234 56788
              </p>
              <p className="cp">
                <i className="bx bx-printer"></i>+91 89234 56789
              </p>
            </motion.div>
          </motion.div>
        </center>
        <div className="feedback">
          <Feedback />
        </div>
      </div>
    </>
  );
}

export default Contactus;
