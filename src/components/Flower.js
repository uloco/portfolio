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
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const CenteredCircle = styled(Circle)`
  top: 50%;
  left: 50%;
`;
const AnimatedCircle = animated(CenteredCircle);

const Flower = (props) => {
  const { width } = useWindowSize();

  const flowerRadius = _.clamp(Math.round(width * 0.2), 100, 250);

  const circleData = [
    { key: "bits", image: bits },
    { key: "arts", image: arts },
    { key: "sounds", image: sounds },
    { key: "thoughts", image: thoughts },
    { key: "books", image: books },
  ];
  const avatarStyle = useSpring({ opacity: 1, from: { opacity: 0 } });

  const springs = useSprings(
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
        from: {
          opacity: 0,
          transform: "translate(0px,0px)",
        },
      };
    })
  );

  const circles = circleData.map((data, i) => ({
    ...data,
    spring: springs[i],
  }));

  return (
    <div>
      <Link to={"about-me"}>
        <CenteredCircle
          src={avatar}
          style={avatarStyle}
          alt={"about me page"}
        />
      </Link>
      {circles.map((props) => {
        return (
          <Link key={props.key} to={props.key}>
            <AnimatedCircle
              src={props.image}
              alt={`${props.key} page`}
              style={props.spring}
              key={props.key}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Flower;
