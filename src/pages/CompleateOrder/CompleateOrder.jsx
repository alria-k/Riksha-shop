import { useState } from "react";
import styled from "styled-components";

import { catalogTitle } from "../../style/styling/styling";
import { FormBox, CartList, Container, RadioButton } from "../";

const OrderSummaryBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CartListBox = styled.div`
  max-width: 600px;
  width: 100%;
`;
const Title = styled.h1`
  ${catalogTitle}
`;

const paymentParams = ["Наличные", "Онлайн оплата"];

export function CompleateOrder() {
  const [value, setValue] = useState(1);

  return (
    <Container>
      <Title>Оформление заказа</Title>
      <OrderSummaryBox>
        <CartListBox>
          <CartList />
        </CartListBox>
        <FormBox step="1" title="Контактные данные">
          {paymentParams.map((text, index) => (
            <RadioButton
              key={index}
              value={index}
              setIsChecked={(e) => setValue(e.target.value)}
              text={text}
              name={value}
            />
          ))}
        </FormBox>
      </OrderSummaryBox>
    </Container>
  );
}
