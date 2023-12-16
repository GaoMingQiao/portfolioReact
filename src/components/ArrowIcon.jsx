import React from "react";
import { motion } from "framer-motion";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArrowIcon = () => {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }} // Animation de rebond
      transition={{ repeat: Infinity, duration: 1 }}
    >
      <FontAwesomeIcon icon={faArrowDown} size="2x" />
    </motion.div>
  );
};

export default ArrowIcon;
