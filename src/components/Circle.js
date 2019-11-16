import styled from "styled-components/macro";
import { device } from "../device";

const Circle = styled.div`
  background-color: ${props => props.color || "white"};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50px 0 0 -50px;
  width: ${props => props.radius || 150}px;
  height: ${props => props.radius || 150}px;
  /* width: 150px;
  height: 150px; */
  color: black;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  border: 1px solid #282c34;

  @media ${device.mobileL} {
    width: 75px;
    height: 75px;
  }
`;

export default Circle;
