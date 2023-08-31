import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { btnStyles, paragraphFont } from "../../style/styling/styling";
import { Price } from "../Price/Price";
import { Sizes } from "../Sizes/Sizes";
import { pickItem } from "../";

const ItemCardWrapper = styled.div`
  background: #ffffff;
  max-width: 392px;
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
const PurchaseButton = styled.button`
  ${btnStyles}
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

export function ItemCard({ obj, i, category }) {
  const currentItem = obj[category].items[i];
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  const handleItemPicker = (item) => {
    dispatch(pickItem(item));
  };

  return (
    i < obj[category].items.length && (
      <ItemCardWrapper onClick={() => handleItemPicker(obj[category].items[i])}>
        <ItemCardImg
          src={`/src/assets/img/categories/${category}/${currentItem.img}`}
          alt="item"
        />
        <ItemCardInner>
          <ItemCardInfo>
            <InfoWrapper>
              <ItemInfoText>{currentItem.gramms} грамм</ItemInfoText>
              {currentItem.organic != 0 && (
                <ItemInfoText>
                  {currentItem.organic.calories} каллорий
                </ItemInfoText>
              )}
            </InfoWrapper>
            <Sizes item={currentItem} price={price} setPrice={setPrice} />
          </ItemCardInfo>
          <InfoCardDiscr>
            <Link to={`/${category}/${currentItem.id}`}>
              <TitleItem>{currentItem.text}</TitleItem>
            </Link>
            <DiscrItem>{currentItem.disrc}</DiscrItem>
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
