import _ from "lodash";
import React from "react";
import { animated, useSpring, useSprings } from "react-spring";
import arts from "../assets/arts.svg";
import bits from "../assets/bits.svg";
import books from "../assets/books.svg";
import sounds from "../assets/sounds.svg";
import thoughts from "../assets/thoughts.svg";
import avatar from "../assets/avatar.jpeg";

import { useWindowSize } from "../hooks/useWindowSize";
import Circle from "./Circle";

const AnimatedCircle = animated(Circle);
const maxCircleRadius = 150;

const Flower = (props) => {
  const { width } = useWindowSize();

  const circleRadius = _.clamp(Math.round(width * 0.125), 75, maxCircleRadius);
  const flowerRadius = _.clamp(Math.round(width * 0.2), 100, 250);

  const circleData = [
    { text: "bits", image: bits },
    { text: "arts", image: arts },
    { text: "sounds", image: sounds },
    { text: "thoughts", image: thoughts },
    { text: "books", image: books },
  ];
  const avatarStyle = useSpring({ opacity: 1, from: { opacity: 0 } });

  const trail = useSprings(
    circleData.length,
    circleData.map((_value, index) => {
      const offset = -70;
      const degrees = (360 / circleData.length) * index + offset;
      const radians = degrees / (180 / Math.PI);
      const x = Math.round(flowerRadius * Math.cos(radians));
      const y = Math.round(flowerRadius * Math.sin(radians));
      return {
        opacity: 1,
        transform: `translate(${x}px,${y}px)`,
        delay: (index + 1) * 60,
        from: { opacity: 0, transform: "translate(0px,0px)" },
      };
    })
  );

  const circles = circleData.map((data, i) => ({
    ...data,
    spring: trail[i],
  }));

  return (
    <div>
      <AnimatedCircle
        src={avatar}
        alt={"avatar"}
        size={circleRadius}
        style={avatarStyle}
      />
      {circles.map((props, index) => {
        return (
          <AnimatedCircle
            src={props.image}
            alt={props.text}
            size={circleRadius}
            style={props.spring}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Flower;
