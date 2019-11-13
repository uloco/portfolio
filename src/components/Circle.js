import styled from "styled-components/macro";

const Circle = styled.div`
  background-color: ${props => props.color || "white"};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50px 0 0 -50px;
  width: 150px;
  height: 150px;
  color: black;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
`;

export default Circle;
