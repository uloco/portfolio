import styled from "styled-components/macro";

export const Circle = styled.img`
  background-color: ${props => props.color || "white"};
  border-radius: 50%;
  border: 1px solid #282c34;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -${props => props.size / 2}px;
  margin-left: -${props => props.size / 2}px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  box-sizing: border-box;
  cursor: pointer;
`;

export default Circle;
