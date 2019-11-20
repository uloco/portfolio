import _ from "lodash";
import React from "react";
import { animated, useSpring, useSprings } from "react-spring";
import arts from "../assets/arts.svg";
import bits from "../assets/bits.svg";
import read from "../assets/read.svg";
import sounds from "../assets/sounds.svg";
import thoughts from "../assets/thoughts.svg";
import { useWindowSize } from "../hooks/useWindowSize";
import Circle from "./Circle";

const AnimatedCircle = animated(Circle);

const maxCircleRadius = 150;
const gravatarUrl = `https://www.gravatar.com/avatar/
c5d5195acc9f791ee59a1f9eeb2bad57?s=${maxCircleRadius}`;

const Flower = props => {
  const { width } = useWindowSize();

  const circleRadius = _.clamp(Math.round(width * 0.125), 75, maxCircleRadius);
  const flowerRadius = _.clamp(Math.round(width * 0.2), 100, 250);

  const circleData = [
    { text: "arts", image: arts },
    { text: "sounds", image: sounds },
    { text: "thoughts", image: thoughts },
    { text: "read", image: read },
    { text: "bits", image: bits }
  ];
  const avatarStyle = useSpring({ opacity: 1, from: { opacity: 0 } });

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
