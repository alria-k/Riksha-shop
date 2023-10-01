import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
const CartItemLink = styled(Link)`
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

export function CartItem({ cartItems }) {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setCount(cartItems.quantity);
  }, [cartItems.quantity]);

  return (
    <CartItemWrapper>
      <LeftSideWrapper>
        <CartItemImage
          src={`/src/assets/img/categories/${cartItems.category}/${cartItems.item.img}`}
          alt="item"
        />
        <CartTitleSizeWrapper>
          <CartItemLink to={`/${cartItems.category}/${cartItems.item.id}`}>
            {cartItems.item.text}
          </CartItemLink>
          {cartItems.item.sizes ? (
            <Sizes
              bgColor={false}
              item={cartItems.item}
              price={cartItems.item.price}
            />
          ) : null}
        </CartTitleSizeWrapper>
      </LeftSideWrapper>
      <CartPriceQuantityWrpper>
        <QuantityCounter setCount={setCount} count={count} />
        <Price
          item={cartItems.item}
          price={price}
          setPrice={setPrice}
          quantity={count}
        />
        <CartDeleteItem>
          <img src="/src/assets/img/delete-cart.svg" alt="delete-icon" />
        </CartDeleteItem>
      </CartPriceQuantityWrpper>
    </CartItemWrapper>
  );
}
