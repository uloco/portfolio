import React from "react";
import { animated, config, useSpring } from "react-spring";
import styled from "styled-components/macro";

const Circle = styled(animated.div)`
  background-color: ${props => props.color || "white"};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50px 0 0 -50px;
  width: 100px;
  height: 100px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Flower = props => {
  const style = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.gentle
  });

  return (
    <div>
      <Circle style={style}>That's me!</Circle>
      {/* <Circle>Arts</Circle>
      <Circle>Sounds</Circle>
      <Circle>Thoughts</Circle>
      <Circle>Reads</Circle>
      <Circle>Bits</Circle> */}
    </div>
  );
};

export default Flower;
