import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components/macro";

const Circle = styled.div`
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
  return (
    <div>
      <Circle>That's me!</Circle>
      <Circle>Arts</Circle>
      <Circle>Sounds</Circle>
      <Circle>Thoughts</Circle>
      <Circle>Reads</Circle>
      <Circle>Bits</Circle>
    </div>
  );
};

Flower.propTypes = {
  foo: PropTypes.bool,
  color: PropTypes.string
};

export default Flower;
