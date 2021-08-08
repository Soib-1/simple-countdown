import React from "react";
import { motion } from "framer-motion";
import "./StarBackground.style.scss";
const StarBackground = () => {
  const stars = Array(90)
    .fill(() => Math.floor(Math.random() * 10))
    .map(() =>
      Array.from({ length: 2 }, () => Math.floor(Math.random() * 2000))
    );

  return (
    <div className="star-container">
      {stars.map((star) => (
        <motion.div
          className="star"
          initial={{ x: star[0] - 10, y: star[1] }}
          animate={{ y: [star[1] - 50, star[1] + 50, star[1] - 50] }}
          transition={{ duration: 5, repeat: Infinity }}
        ></motion.div>
      ))}
      {stars.map((star) => (
        <motion.div
          className="star2"
          initial={{ x: star[0] - 10, y: star[1] }}
          animate={{ y: [star[1] + 100, star[1] - 100, star[1] + 100] }}
          transition={{ duration: 10, repeat: Infinity }}
        ></motion.div>
      ))}
      {stars.map((star) => (
        <motion.div
          className="star3"
          initial={{ x: star[0] - 10, y: star[1] }}
          animate={{ y: [star[1] - 200, star[1] + 200, star[1] - 200] }}
          transition={{ duration: 15, repeat: Infinity }}
        ></motion.div>
      ))}
    </div>
  );
};

export default StarBackground;
