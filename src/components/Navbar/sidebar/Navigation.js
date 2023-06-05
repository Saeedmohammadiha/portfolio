import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem.js";
import { menu } from "..";

const itemIds = [0, 1, 2, 3, 4];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggleOpen }) => (
  <motion.ul variants={variants}>
    {menu?.map((item) => (
      <MenuItem
        id={item.id}
        key={item.id}
        title={item.title}
        section={item.section}
        toggleOpen={toggleOpen}
      />
    ))}
  </motion.ul>
);
