import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { paragraphFont } from "../../style/styling/styling";
import { Price } from "../Price/Price";
import { Sizes } from "../Sizes/Sizes";
import { OrderBtn } from "../OrderBtn/OrderBtn";
import { SaleCard } from "../";

const ItemCardWrapper = styled.div`
  background: #ffffff;
  max-width: 392px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 479px;
`;
const ItemCardImg = styled.img`
  user-select: none;
  pointer-events: none;
  height: 256px;
`;
const ItemCardInner = styled.div`
  padding: 25px;
  min-height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
const ItemCardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const ItemInfoText = styled.p`
  position: relative;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #b7b7b7;
  :nth-child(2) {
    ::before {
      content: "";
      position: absolute;
      width: 4px;
      height: 4px;
      background: #e07153;
      border-radius: 100%;
      left: -15%;
      top: 40%;
    }
  }
`;
const InfoCardDiscr = styled.div`
  margin-bottom: 19px;
`;
const PurchaseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TitleItem = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const DiscrItem = styled.p`
  ${paragraphFont}
`;
const OrderBtnWrapper = styled.div`
  min-width: 180px;
`;

export function ItemCard({ obj, category, itemLink }) {
  const [price, setPrice] = useState(0);
  const [extraPrice, setExtraPrice] = useState(0);

  return (
    <>
      {category == "sale" && <SaleCard obj={obj} />}
      {category !== "sale" && (
        <ItemCardWrapper>
          <ItemCardImg
            src={`/src/assets/img/categories/${category}/${obj.img}`}
            alt="item"
          />
          <ItemCardInner>
            <ItemCardInfo>
              <InfoWrapper>
                <ItemInfoText>{obj.gramms} грамм</ItemInfoText>
                {obj.organic ? (
                  <ItemInfoText>{obj.organic.calories} каллорий</ItemInfoText>
                ) : null}
              </InfoWrapper>
              <Sizes
                extraPrice={extraPrice}
                setExtra={(p) => setExtraPrice(p)}
                item={obj}
                price={price}
                setPrice={setPrice}
              />
            </ItemCardInfo>
            <InfoCardDiscr>
              <Link to={`/${category}/${itemLink}`}>
                <TitleItem>{obj.text}</TitleItem>
              </Link>
              <DiscrItem>{obj.disrc}</DiscrItem>
            </InfoCardDiscr>
            <PurchaseWrapper>
              <Price
                item={obj}
                price={price}
                setPrice={setPrice}
                extraPrice={extraPrice}
              />
              <OrderBtnWrapper>
                <OrderBtn
                  extraPrice={extraPrice}
                  quantity={1}
                  item={obj}
                  category={category}
                />
              </OrderBtnWrapper>
            </PurchaseWrapper>
          </ItemCardInner>
        </ItemCardWrapper>
      )}
    </>
  );
}
