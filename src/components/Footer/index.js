import React, { useRef } from "react";
import "./index.scss";
import { menu } from "../Navbar";
import { motion, useInView } from "framer-motion";
import instagram from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";
import email from "../../assets/email.svg";
import phone from "../../assets/telephone.svg";
import linkedin from "../../assets/linkedin.svg";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer className="footer" id="contact">
      <div className="footer__list">
        <ul>
          {menu.map((item) => {
            return (
              <li key={item.id} className="footer__item">
                <a href={`#${item.section}`} className="footer__link">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="contact" ref={ref}>
        <div className="social">
          <motion.div
            initial={{ scale: 0.1 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.7,
              delay: 0.2,
            }}
            className="icon"
          >
            <img src={instagram} alt="instagram" />
          </motion.div>
          <motion.div
            initial={{ scale: 0.1 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.7,
              delay: 0.2,
            }}
            className="icon"
          >
            <img src={telegram} alt="telegram" />
          </motion.div>
          <motion.div
            initial={{ scale: 0.1 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.7,
              delay: 0.2,
            }}
            className="icon"
          >
            <a href="tel:093520041115">
              <img src={phone} alt="phone" />
            </a>
          </motion.div>
          <motion.div
            initial={{ scale: 0.1 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.7,
              delay: 0.2,
            }}
            className="icon"
          >
            <a href="mailto:masoudkaveh1993@gmail.com">
              <img src={email} alt="email" />
            </a>
          </motion.div>
          <motion.div
            initial={{ scale: 0.1 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.7,
              delay: 0.2,
            }}
            className="icon"
          >
            <a href="https://www.linkedin.com/in/masoudkaveh1994/">
              <img src={linkedin} alt="linkedin" />
            </a>
          </motion.div>
        </div>
        <div className="footer__copyright">
          <p>
            copyright &copy; by
            <a
              href="https://www.linkedin.com/in/saeed-mohammadiha-183b10222/"
              className="footer__link"
            >
              saeed mohammadiha
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
