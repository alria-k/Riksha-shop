import { useDispatch } from "react-redux";
import styled from "styled-components";

import { addToCart } from "../";
import { btnStyles } from "../../style/styling/styling";

const OrderButton = styled.button`
  ${btnStyles}
  width: 100%;
`;

export function OrderBtn({ item }) {
  const dispatch = useDispatch();

  function handlerAddToCart(i) {
    dispatch(addToCart(i));
  }

  return (
    <OrderButton onClick={() => handlerAddToCart(item)}>Заказать</OrderButton>
  );
}
