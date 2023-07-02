import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { btnStyles } from "../../style/styling/styling";
import { Price } from "../Price/Price";
import { Sizes } from "../Sizes/Sizes";

const ItemCardWrapper = styled.div`
  background: #ffffff;
  max-width: 392px;
`;
const ItemCardImg = styled.img`
  user-select: none;
  pointer-events: none;
`;
const ItemCardInner = styled.div`
  padding: 25px;
  min-height: 256px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
const PurchaseButton = styled.button`
  ${btnStyles}
`;

export function ItemCard({ obj, i, category }) {
  const currentItem = obj[category].items[i];
  const [price, setPrice] = React.useState(0);

  return (
    i < obj[category].items.length && (
      <ItemCardWrapper>
        <ItemCardImg
          src={`/src/assets/img/categories/${category}/${currentItem.img}`}
          alt="item"
        />
        <ItemCardInner>
          <ItemCardInfo>
            <InfoWrapper>
              <ItemInfoText>{currentItem.gramms} грамм</ItemInfoText>
              {currentItem.organic ? (
                <ItemInfoText>
                  {currentItem.organic.calories} каллорий
                </ItemInfoText>
              ) : (
                ""
              )}
            </InfoWrapper>
            <Sizes item={currentItem} price={price} setPrice={setPrice} />
          </ItemCardInfo>
          <InfoCardDiscr>
            <Link to={`/${category}/${currentItem.id}`}>
              <h1>{currentItem.text}</h1>
            </Link>
            <p>{currentItem.disrc}</p>
          </InfoCardDiscr>
          <PurchaseWrapper>
            <Price item={currentItem} price={price} setPrice={setPrice} />
            <PurchaseButton>Заказать</PurchaseButton>
          </PurchaseWrapper>
        </ItemCardInner>
      </ItemCardWrapper>
    )
  );
}
