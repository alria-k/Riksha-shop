import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { CartList } from "../CartList/CartList";
import { Button } from "../Button/Button";

const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 0 12px;
`;
const SummaryText = styled.p`
  font-size: 20px;
  font-weight: 400;
`;
const SummaryPrice = styled.span`
  text-align: right;
  font-size: 24px;
  font-weight: 600;
`;
const ButtonWrapper = styled.div`
  max-width: 234px;
`;

export function Cart() {
  const summary = useSelector((state) => state.summary);

  return (
    <>
      <CartList />
      <SummaryWrapper>
        <SummaryText>
          Сумма заказа: <SummaryPrice>{summary} ₽</SummaryPrice>
        </SummaryText>
        <ButtonWrapper>
          <Link to={summary !== 0 && "/order-confirmation"}>
            <Button>Оформить заказ</Button>
          </Link>
        </ButtonWrapper>
      </SummaryWrapper>
    </>
  );
}
