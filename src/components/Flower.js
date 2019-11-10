import React from "react";
import { animated, useSpring, useSprings } from "react-spring";
import styled from "styled-components/macro";
import arts from "../assets/arts.svg";
import bits from "../assets/bits.svg";
import reads from "../assets/reads.svg";

const Circle = styled(animated.div)`
  background-color: ${props => props.color || "white"};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50px 0 0 -50px;
  width: 150px;
  height: 150px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.image});
`;

const Flower = props => {
  const radius = 250;
  const circleData = [
    { text: "", image: arts },
    { text: "Sounds", image: "" },
    { text: "Thoughts", image: "" },
    { text: "", image: reads },
    { text: "", image: bits }
  ];
  const styleCenter = useSpring({ opacity: 1, from: { opacity: 0 } });

  const springs = useSprings(
    circleData.length,
    circleData.map((value, index) => {
      const degrees = (360 / circleData.length) * index;
      const radians = degrees / (180 / Math.PI);
      const x = radius * Math.cos(radians);
      const y = radius * Math.sin(radians);
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
      <Circle style={styleCenter}>That's me</Circle>
      {circles.map((props, index) => {
        return (
          <Circle style={props.spring} key={index} image={props.image}>
            {props.text}
          </Circle>
        );
      })}
    </div>
  );
};

export default Flower;
