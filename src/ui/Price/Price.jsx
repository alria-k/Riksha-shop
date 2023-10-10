import React, { useEffect } from "react";
import styled from "styled-components";

const PriceTitle = styled.h2`
  position: relative;
  user-select: none;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #1b1b1b;
  width: 100px;
`;
const OldPrice = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: line-through;
  color: #b7b7b7;
  position: absolute;
  top: -15px;
`;

export function Price({ item, price, setPrice, quantity = 1 }) {
  useEffect(() => {
    setPrice(item.price);
  }, [item]);

  return item.sale ? (
    <PriceTitle>
      <OldPrice>{price * quantity} ₽</OldPrice>
      {Math.round(quantity * (price - (price / 100) * item.sale))} ₽
    </PriceTitle>
  ) : (
    <PriceTitle>{price * quantity} ₽</PriceTitle>
  );
}
