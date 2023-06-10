import React, { useRef } from "react";
import Carousel from "react-material-ui-carousel";
import "./index.scss";
import cert from "../../assets/cert.jpg";
import { useInView } from "framer-motion";

var items = [
  {
    title: "title #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    title: "title #2",
    description: "Hello World!",
  },
];

export default function SlideShow(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="container-slideshow"
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <Carousel navButtonsAlwaysVisible={true}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  return (
    <div className="item-container">
      <div className="item-content">
        <h2>{props.item.title}</h2>
        <p>{props.item.description}</p>
      </div>
      <img src={cert} alt="certificate" />
    </div>
  );
}
