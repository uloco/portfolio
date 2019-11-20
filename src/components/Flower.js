import React from "react";
import { animated, useSpring, useSprings } from "react-spring";
import arts from "../assets/arts.svg";
import bits from "../assets/bits.svg";
import read from "../assets/read.svg";
import Circle from "./Circle";
import { useWindowSize } from "../hooks/useWindowSize";
import _ from "lodash";

const AnimatedCircle = animated(Circle);

const Flower = props => {
  const { width } = useWindowSize();

  const flowerRadius = _.clamp(Math.round(width * 0.2), 100, 250);
  const circleRadius = _.clamp(Math.round(width * 0.25), 150, 300);

  const circleData = [
    { text: "arts", image: arts },
    { text: "sounds", image: "" },
    { text: "thoughts", image: "" },
    { text: "read", image: read },
    { text: "bits", image: bits }
  ];
  const avatarStyle = useSpring({ opacity: 1, from: { opacity: 0 } });
  const gravatarUrl = `https://www.gravatar.com/avatar/c5d5195acc9f791ee59a1f9eeb2bad57?s=${200}`;

  const springs = useSprings(
    circleData.length,
    circleData.map((_value, index) => {
      const degrees = (360 / circleData.length) * index;
      const radians = degrees / (180 / Math.PI);
      const x = Math.round(flowerRadius * Math.cos(radians));
      const y = Math.round(flowerRadius * Math.sin(radians));
      return {
        opacity: 1,
        transform: `translate(${x}px,${y}px)`,
        from: { opacity: 0, transform: "translate(0px,0px)" }
      };
    })
  );

  const circles = circleData.map((data, i) => ({
    ...data,
    spring: springs[i]
  }));

  return (
    <div>
      <AnimatedCircle
        src={gravatarUrl}
        radius={circleRadius}
        style={avatarStyle}
      />
      {circles.map((props, index) => {
        return (
          <AnimatedCircle
            src={props.image}
            alt={props.text}
            radius={circleRadius}
            style={props.spring}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Flower;
