import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { TitleFont } from "../../../../style/styling/styling";
import { SaleCard } from "../../index";

const SaleWrapper = styled.div`
  margin-bottom: 124px;
`;
const SaleList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const itemsOnOnePage = 3;

export function Sale() {
  const { sale } = useSelector((state) => state.clickedCategory.data);

  return (
    <SaleWrapper>
      <TitleFont>Акции</TitleFont>
      <SaleList>
        {sale &&
          [...Array(itemsOnOnePage).keys()].map((_, index) => (
            <li key={index}>
              <SaleCard obj={sale} i={index} />
            </li>
          ))}
      </SaleList>
    </SaleWrapper>
  );
}
