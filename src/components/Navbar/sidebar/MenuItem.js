import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    x:0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    x:-200,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ id, title, section, toggleOpen }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        className="menu-item"
        onClick={() => {
          toggleOpen();
        }}
        href={`#${section}`}
      >
        {title}
      </a>
    </motion.li>
  );
};
