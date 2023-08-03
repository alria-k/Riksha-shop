import React from "react";
import Skeleton from "react-loading-skeleton";
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
  const {
    data: { sale },
    loading,
  } = useSelector((state) => state.clickedCategory);

  return (
    <SaleWrapper>
      <TitleFont>Акции</TitleFont>
      <SaleList>
        {loading &&
          [...Array(itemsOnOnePage).keys()].map((_, index) => (
            <li key={index}>
              <Skeleton width={392} height={280} />
            </li>
          ))}
        {!loading &&
          [...Array(itemsOnOnePage).keys()].map((_, index) => (
            <li key={index}>
              <SaleCard obj={sale} i={index} />
            </li>
          ))}
      </SaleList>
    </SaleWrapper>
  );
}
