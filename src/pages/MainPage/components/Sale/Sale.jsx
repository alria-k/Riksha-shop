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

export function Sale({ saleData }) {
  const [sale] = saleData.read();

  const itemsOnOnePage = 3;

  return (
    <SaleWrapper>
      <TitleFont>Акции</TitleFont>
      <SaleList>
        {[...Array(itemsOnOnePage).keys()].map((_, index) => (
          <li key={index}>
            <SaleCard obj={sale} i={index} />
          </li>
        ))}
      </SaleList>
    </SaleWrapper>
  );
}
