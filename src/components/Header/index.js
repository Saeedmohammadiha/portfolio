import React from "react";
import hero from "../../assets/hero-man.png";
import "./index.scss";
import { motion } from "framer-motion";
import sisco from "../../assets/sisco.svg";
import docker from "../../assets/docker.svg";

export default function Header() {
  return (
    <header className="header" id="home">
      <div className="picture-container">
        <motion.div
          initial={{ scale: 0.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.5,
            type: "spring",
            bounce: 0.7,
          }}
          className="icon sisco"
        >
          <motion.div
            initial={{ x: 0, y: 80 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              repeat: "10000000",
              duration: 1.5,
              repeatType: "reverse",
            }}
          >
            <img src={sisco} alt="sisco" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.5,
            type: "spring",
            bounce: 0.7,
            delay: 0.2,
          }}
          className="icon docker"
        >
          <motion.div
            initial={{ x: 0, y: 180 }}
            animate={{ x: 0, y: 100 }}
            transition={{
              repeat: "1000000",
              duration: 1.5,
              repeatType: "reverse",
            }}
          >
            <img src={docker} alt="docker" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.75, type:'spring' }}
        >
          <img src={hero} alt="hero" />
        </motion.div>
      </div>

      <motion.div
        initial={{ x: "100%", scale: 0.1 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 1.25, type: "spring", bounce: 0.4 }}
        className="text-container"
      >
        <h4>hello i'm </h4>
        <h1>Masoud Kavehei</h1>
        <h3>Network engineer</h3>

        <p className="descrption">
          Hey are looking for network expert to <span>build and gorw </span>your
          network ? <br />
          let's shake hands with me.
        </p>

        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
          className="button"
        >
          Get in Touch
          <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: 20, y: 0 }}
            transition={{
              repeat: "1000000",
              duration: 1.2,
              repeatType: "reverse",
            }}
          >
            &rarr;
          </motion.div>
        </motion.button>
      </motion.div>
    </header>
  );
}
