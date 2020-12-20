import React from "react";
import styled from "styled-components/macro";
import { useWindowSize } from "../hooks/useWindowSize";
import _ from "lodash";

const StyledCircle = styled.img`
  background-color: ${(props) => props.color || "#282c34"};
  color: white;
  border-radius: 50%;
  border: 1px solid #282c34;
  position: fixed;
  margin-top: -${(props) => props.size / 2}px;
  margin-left: -${(props) => props.size / 2}px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const maxCircleRadius = 150;

const Circle = (props) => {
  const { width } = useWindowSize(150);
  const circleRadius = _.clamp(Math.round(width * 0.125), 75, maxCircleRadius);

  return <StyledCircle {...props} size={circleRadius} />;
};

export default Circle;
