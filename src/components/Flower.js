import React from "react";
import { animated, useSpring, useSprings } from "react-spring";
import arts from "../assets/arts.svg";
import bits from "../assets/bits.svg";
import read from "../assets/read.svg";
import Circle from "./Circle";
import { useWindowSize } from "../hooks/useWindowSize";

const AnimatedCircle = animated(Circle);

const Flower = props => {
  const { width } = useWindowSize(150);

  const flowerRadius = Math.round(width * 0.2);
  const circleRadius = Math.round(width * 0.15);

  const circleData = [
    { text: "", image: arts },
    { text: "Sounds", image: "" },
    { text: "Thoughts", image: "" },
    { text: "", image: read },
    { text: "", image: bits }
  ];
  const avatarStyle = useSpring({ opacity: 1, from: { opacity: 0 } });
  const gravatarUrl = `https://www.gravatar.com/avatar/c5d5195acc9f791ee59a1f9eeb2bad57?s=${circleRadius}`;

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
        radius={circleRadius}
        style={avatarStyle}
        image={gravatarUrl}
      />
      {circles.map((props, index) => {
        return (
          <AnimatedCircle
            radius={circleRadius}
            style={props.spring}
            key={index}
            image={props.image}
          >
            {props.text}
          </AnimatedCircle>
        );
      })}
    </div>
  );
};

export default Flower;
