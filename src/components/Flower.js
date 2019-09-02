import React from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components/macro";

const Circle = styled(animated.div)`
  display: flex;
  background-color: ${props => props.color || "white"};
  border-radius: 50%;
  width: 200px;
  height: 200px;
  color: black;
  justify-content: center;
  align-items: center;
`;

const Flower = props => {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <div>
      <Circle style={style}>That's me!</Circle>
      <Circle>Arts</Circle>
      <Circle>Sounds</Circle>
      <Circle>Thoughts</Circle>
      <Circle>Reads</Circle>
      <Circle>Bits</Circle>
    </div>
  );
};

export default Flower;
