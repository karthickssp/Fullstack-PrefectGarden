import { motion } from "framer-motion";
import { useState } from "react";
function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="motioncard">
        <motion.div
          layout
          className="card"
          onClick={() => setIsOpen(!isOpen)}
          style={{ borderRadius: "1rem" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="card-top" layout="position">
            <div className="card-top__header">
              <h3>Daily Tasks</h3>
            </div>
          </motion.div>

          {isOpen && (
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
              <p>A section displaying upcoming gardening tasks. Include:</p>
              <p>Task name: Watering the plants</p>
              <p>Due date: 22:12:2023</p>
              <p>Priority level: High</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
}

export default Modal;
