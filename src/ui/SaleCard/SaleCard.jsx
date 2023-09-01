import React from "react";
import styled from "styled-components";

const SaleCardItem = styled(({ backGroundImg, ...props }) => (
  <div {...props} />
))`
  ${({ backGroundImg }) =>
    backGroundImg &&
    `background-image: url(/src/assets/img/categories/sale/${backGroundImg});}`}
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  min-width: 392px;
  max-width: 392px;
  min-height: 280px;
  max-height: 280px;
  padding: 24px;
`;
const CardTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #1b1b1b;
`;
const CardText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #1b1b1b;
`;

export function SaleCard({ obj }) {
  return (
    <a href="#f">
      <SaleCardItem backGroundImg={obj.bg}>
        <CardTitle>{obj.title}</CardTitle>
        <CardText>{obj.text}</CardText>
      </SaleCardItem>
    </a>
  );
}
