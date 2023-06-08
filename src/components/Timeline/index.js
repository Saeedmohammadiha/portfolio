import React from "react";
import "./index.scss";

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
  return (
    <section id="timeline">
      {data.map((item) => {
        return (
          <article>
            <div class="inner">
              <span class="date">
                <span class="day">
                  {item.day}
                  <sup>th</sup>
                </span>
                <span class="month">{item.month}</span>
                <span class="year">{item.year}</span>
              </span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
