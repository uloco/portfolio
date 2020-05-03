import React from "react";
import Circle from "../components/Circle";
import { Link } from "react-router-dom";

import bits from "../assets/bits.svg";
import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  flex-direction: "column";
`;

const BitsPage = (props) => {
  return (
    <Container>
      <header>Header Foo</header>
      <Circle src={bits} />
    </Container>
  );
};

export default BitsPage;
