import { useRef, useState } from "react";
import ProgressBar from "./ProgressBar";
import "./index.scss";
import { useInView } from "framer-motion";
import upArrow from "../../assets/up-arrow.svg";
import downArrow from "../../assets/down-arrow.svg";
import { motion } from "framer-motion";

const skills = [
  {
    id: 0,
    type: "network",
    children: [
      { title: "Ccna", percent: 100, id: 0 },
      { title: "Ccnp", percent: 100, id: 1 },
      { title: "Vm ware virtualization", percent: 100, id: 2 },
      { title: "Fortigate firewall", percent: 100, id: 3 },
      { title: "Cisco firepower", percent: 100, id: 4 },
      { title: "Mikrotik", percent: 100, id: 5 },
      { title: "Cisco sdwan", percent: 100, id: 6 },
      { title: "Linux administration", percent: 100, id: 7 },
      { title: "Ansible", percent: 100, id: 8 },
      { title: "Jenkins", percent: 100, id: 9 },
      { title: "Bash script", percent: 100, id: 10 },
      { title: "Trafform", percent: 100, id: 11 },
      { title: "Cloud computing", percent: 100, id: 12 },
      { title: "Network Automation", percent: 100, id: 13 },
      { title: "Infrastructure architecture", percent: 100, id: 14 },
      { title: "Openstack", percent: 100, id: 15 },
      { title: "Linux virtualization", percent: 100, id: 16 },
      { title: "Zabbix monitoring", percent: 100, id: 17 },
      { title: "Grafana", percent: 100, id: 18 },
      { title: "Prometheus", percent: 100, id: 19 },
    ],
  },
  {
    id: 1,
    type: "devOps",
    children: [
      { title: "Docker", percent: 100, id: 0 },
      { title: "Kubernetes", percent: 100, id: 1 },
      { title: "Git", percent: 100, id: 2 },
    ],
  },
  {
    id: 2,
    type: "development",
    children: [{ title: "Python", percent: 100, id: 0 }],
  },
];
export default function Skills() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  return (
    <>
      <motion.section
      id="skills"
        ref={ref}
        className="skills-container"
        animate={{
          height: isOpen ? "unset" : "80%",
        }}
        transition={{ duration: 1.5 , type: 'spring', bounce: .4}}
      >
        {skills.map((section) => {
          return (
            <div
              style={{
                transform: isInView ? "none" : "translateY(400px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className="section"
              key={section.id}
            >
              {section.children.map((skill) => {
                return (
                  <div key={skill.id} className="skill">
                    <p>{skill.title}</p>
                    <ProgressBar progress={skill.percent} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </motion.section>

      <div
        className="divider"
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
      >
        <hr />
        <span>
          {isOpen ? (
            <img src={upArrow} alt="up arrow" />
          ) : (
            <img src={downArrow} alt="down arrow" />
          )}
        </span>
      </div>
    </>
  );
}
