import React, { useState } from "react";
import styled from "styled-components";

import { QuantityCounter } from "../QuantityCounter/QuantityCounter";
import { Sizes } from "../Sizes/Sizes";
import { Price } from "../Price/Price";

const CartItemWrapper = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #e2e1e1;
  display: flex;
  justify-content: space-between;
`;
const LeftSideWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const CartItemImage = styled.img`
  width: 98px;
  height: 64px;
`;
const CartTitleSizeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CartItemTitle = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #1b1b1b;
`;
const CartPriceQuantityWrpper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const PriceText = styled.p`
  color: #1b1b1b;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const CartDeleteItem = styled.button`
  border: none;
  background: transparent;
  padding: none;
`;

export function CartItem() {
  const [quantity, setQuantity] = useState(1);

  return (
    <CartItemWrapper>
      <LeftSideWrapper>
        <CartItemImage src="/src/assets/img/categories/pizza/vetchina-i-gribi.jpg" />
        <CartTitleSizeWrapper>
          <CartItemTitle>Пицца “Рикша”</CartItemTitle>
          {/* <Sizes bgColor={false} /> */}
        </CartTitleSizeWrapper>
      </LeftSideWrapper>
      <CartPriceQuantityWrpper>
        <QuantityCounter setCount={setQuantity} count={quantity} />
        {/* <Price quantity={quantity} /> */}
        <PriceText>100 Р</PriceText>
        <CartDeleteItem>
          <img src="/src/assets/img/delete-cart.svg" alt="" />
        </CartDeleteItem>
      </CartPriceQuantityWrpper>
    </CartItemWrapper>
  );
}
