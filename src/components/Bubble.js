import React from "react";
import styled, { css } from "styled-components/macro";
import PropTypes from "prop-types";

const Circle = styled.div`
  background-color: ${(props) => props.color || "white"};
  border-radius: 50%;
  width: 200px;
  height: 200px;
  color: white;
`;

const circleStyle = css`
  background-color: olive;
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;

const RedCircle = styled(Circle)`
  background-color: red;
`;

const Bubble = props => {
  return (
    <div>
      <Circle foo />
      <Circle color="blue" />
      <Circle />
      <div css={circleStyle} />
      <RedCircle />
    </div>
  );
};

Bubble.propTypes = {
  foo: PropTypes.bool,
  color: PropTypes.string
};

export default Bubble;
