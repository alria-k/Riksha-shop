import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { CartItem } from "../CartItem/CartItem";

export function CartList() {
  const cart = useSelector((state) => state.cart);

  return cart.length
    ? cart.map((items, i) => <CartItem key={i} cartItems={items} />)
    : null;
}
