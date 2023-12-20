import styled from "styled-components";
import { useSelector } from "react-redux";

import { CartItem } from "../CartItem/CartItem";

const EmptyCartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 52px 0 69px 0;
`;

export function CartList() {
  const cart = useSelector((state) => state.cart);

  return cart.length ? (
    cart.map((items, i) => <CartItem key={i} cartItems={items} itemIndex={i} />)
  ) : (
    <EmptyCartWrapper>
      <img src="/src/assets/img/empty-cart.png" alt="empty-cart-image" />
    </EmptyCartWrapper>
  );
}
