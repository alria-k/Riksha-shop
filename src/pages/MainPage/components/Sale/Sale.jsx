import React, { useEffect, useState } from "react";
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

export function Sale({ saleData }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    saleData && setLoading(false);
  }, [saleData]);

  return (
    <SaleWrapper>
      <TitleFont>Акции</TitleFont>
      <SaleList>
        {[...Array(itemsOnOnePage).keys()].map(
          (_, index) =>
            !loading && (
              <li key={index}>
                <SaleCard obj={saleData} i={index} />
              </li>
            )
        )}
      </SaleList>
    </SaleWrapper>
  );
}
