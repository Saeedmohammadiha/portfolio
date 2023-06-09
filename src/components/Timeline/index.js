import React, { useRef } from "react";
import "./index.scss";
import { motion, useInView } from "framer-motion";

const data = [
  {
    id: 0,
    day: 30,
    month: "Jan",
    year: 2014,
    title: "title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quisrutrum nunc, eget dictum massa. Nam faucibus felis nec augueadipiscing, eget commodo libero mattis.",
  },
  {
    id: 1,
    day: 30,
    month: "Jan",
    year: 2014,
    title: "title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quisrutrum nunc, eget dictum massa. Nam faucibus felis nec augueadipiscing, eget commodo libero mattis.",
  },
  {
    id: 2,
    day: 30,
    month: "Jan",
    year: 2014,
    title: "title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quisrutrum nunc, eget dictum massa. Nam faucibus felis nec augueadipiscing, eget commodo libero mattis.",
  },
  {
    id: 3,
    day: 30,
    month: "Jan",
    year: 2014,
    title: "title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quisrutrum nunc, eget dictum massa. Nam faucibus felis nec augueadipiscing, eget commodo libero mattis.",
  },
  {
    id: 4,
    day: 30,
    month: "Jan",
    year: 2014,
    title: "title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quisrutrum nunc, eget dictum massa. Nam faucibus felis nec augueadipiscing, eget commodo libero mattis.",
  },
];

export default function TimeLine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  function isEven(number) {
    if (number % 2 === 0) {
      return true;
    } else if (number === 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <section id="timeline">
      {data.map((item, index) => {
        return (
          <article key={item.id}>
            <motion.div
              ref={ref}
              style={{
                transform: isInView ? "none" : isEven(index) ? "translateX(-200px)" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: `all .5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.${index}s`,
              }}
            >
              <div className="inner">
                <span className="date">
                  <span className="day">
                    {item.day}
                    <sup>th</sup>
                  </span>
                  <span className="month">{item.month}</span>
                  <span className="year">{item.year}</span>
                </span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </motion.div>
          </article>
        );
      })}
    </section>
  );
}
