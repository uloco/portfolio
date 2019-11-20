import styled from "styled-components/macro";

export const Circle = styled.img`
  background-color: ${props => props.color || "white"};
  border-radius: 50%;
  border: 1px solid #282c34;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -${props => props.radius / 4}px;
  margin-left: -${props => props.radius / 4}px;
  width: ${props => props.radius / 2}px;
  height: ${props => props.radius / 2}px;
  max-width: 150px;
  max-height: 150px;
  box-sizing: border-box;
`;

export default Circle;
