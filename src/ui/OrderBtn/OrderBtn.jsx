import styled from "styled-components";

import { btnStyles } from "../../style/styling/styling";

const OrderButton = styled.button`
  ${btnStyles}
`;

export function OrderBtn() {
  return <OrderButton>Заказать</OrderButton>;
}
