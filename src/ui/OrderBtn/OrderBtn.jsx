import { useDispatch } from "react-redux";
import styled from "styled-components";

import { addToCart } from "../";
import { btnStyles } from "../../style/styling/styling";

const OrderButton = styled.button`
  ${btnStyles}
  width: 100%;
`;

export function OrderBtn({ item, quantity }) {
  const dispatch = useDispatch();

  function handlerAddToCart(i, q) {
    dispatch(addToCart({ item: i, quantity: q }));
  }

  return (
    <OrderButton onClick={() => handlerAddToCart(item, quantity)}>
      Заказать
    </OrderButton>
  );
}
