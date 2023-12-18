import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { quantityChanger, deleteFromCart, sizeChanger } from "../";
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
  max-width: 160px;
`;
const CartPriceQuantityWrpper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const CartDeleteItemBtn = styled.button`
  border: none;
  background: transparent;
  padding: none;
`;
const DeleteItemIcon = styled.img`
  width: 24px;
  height: 24;
`;

export function CartItem({ cartItems }) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const [extraPrice, setExtraPrice] = useState(cartItems.extraPrice);

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
              setPrice={setPrice}
              setExtra={(p) =>
                dispatch(sizeChanger({ p, id: cartItems.item.id }))
              }
              extraPrice={cartItems.extraPrice}
            />
          ) : null}
        </CartTitleSizeWrapper>
      </LeftSideWrapper>
      <CartPriceQuantityWrpper>
        <QuantityCounter
          setCount={(q) =>
            dispatch(
              quantityChanger({
                q,
                id: cartItems.item.id,
              })
            )
          }
          count={cartItems.quantity}
        />
        <Price
          item={cartItems.item}
          price={price}
          setPrice={setPrice}
          quantity={cartItems.quantity}
          extraPrice={extraPrice}
        />
        <CartDeleteItemBtn
          onClick={() => dispatch(deleteFromCart(cartItems.item.id))}
        >
          <DeleteItemIcon
            src="/src/assets/img/delete-cart.svg"
            alt="delete-icon"
          />
        </CartDeleteItemBtn>
      </CartPriceQuantityWrpper>
    </CartItemWrapper>
  );
}
