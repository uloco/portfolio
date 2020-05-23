import React from "react";
import styled from "styled-components/macro";
import bits from "../assets/bits.svg";
import Circle from "../components/Circle";

const Container = styled.div`
  flex-direction: "column";
  margin: 100px;
`;

const HeaderCircle = styled(Circle)`
  position: initial;
`;

const BitsPage = (props) => {
  return (
    <Container>
      <HeaderCircle src={bits} />
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        eligendi illum, nihil earum eos sunt itaque ab quia quo deleniti
        accusamus enim accusantium voluptatum odio vero. Architecto veniam enim
        fuga.
      </div>
    </Container>
  );
};

export default BitsPage;
