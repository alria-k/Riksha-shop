import React, { useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

import {
  Container,
  Slider,
  Price,
  Sizes,
  QuantityCounter,
  OrderBtn,
} from "../index";
import { catalogTitle, paragraphFont } from "../../style/styling/styling";

const ItemText = styled(({ weight = false, ...props }) => <p {...props} />)`
  ${({ weight }) => weight && `margin-bottom: 8px;`}
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #1b1b1b;
  span {
    font-weight: 400;
  }
`;
const ItemInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 82px;
`;
const ItemStepBackWrapper = styled.div`
  padding-bottom: 24px;
  margin-bottom: 57px;
  border-bottom: 1px solid #e2e1e1;
`;
const ItemStepBackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 16px;
`;
const ItemImg = styled.img`
  border: 1px solid #e2e1e1;
  width: 570px;
`;
const ItemCatalogTitle = styled.h1`
  ${catalogTitle}
`;
const ItemDeliveryWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 23px;
`;
const ItemDeliveryText = styled.p`
  ${paragraphFont}
  font-weight: 500;
`;
const ItemCompositionText = styled.p`
  ${paragraphFont}
`;
const ItemDeliveryLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: underline;
  color: #c95c3f;
`;
const ItemCompositionWrapper = styled.div`
  margin-bottom: 38px;
`;
const ItemSizeWrapper = styled.div`
  margin-bottom: 38px;
`;
const ItemSizeTitle = styled(ItemText)`
  margin-bottom: 12px;
`;
const ItemPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ItemCatalogBox = styled.div`
  max-width: 531px;
  width: 100%;
`;
const OrganicTableWrapper = styled.table`
  text-align: center;
  padding: 9.5px 0;
  border: 1px solid #e2e1e1;
  margin-bottom: 24px;
`;
const OrganicTitle = styled.th`
  ${paragraphFont}
  min-width: 132px;
  :not(:last-child) {
    border-right: 1px solid #e2e1e1;
  }
`;
const OrganicDiscr = styled.td`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  :not(:last-child) {
    border-right: 1px solid #e2e1e1;
  }
`;
const OrderBtnWrapper = styled.div`
  min-width: 248px;
`;
const ImgWrapper = styled.div`
  height: 373px;
  min-width: 570px;
  margin-right: 50px;
`;

export function ItemPage() {
  const { category, id } = useParams();
  const [itemWidth, setItemWidth] = useState(0);
  const {
    data: { items },
    loading,
  } = useSelector((state) => state.clickedCategory);

  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extraPrice, setExtraPrice] = useState(0);

  const currentItem =
    !loading && items[category].items.find((elem) => elem.link == id);

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setItemWidth(node.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div>
      <Container>
        <ItemStepBackWrapper>
          <ItemStepBackLink to={`/${category}`}>
            <svg
              width="33"
              height="12"
              viewBox="0 0 33 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM33 5.25L1 5.25V6.75L33 6.75V5.25Z"
                fill="#E07153"
              />
            </svg>
            <p>Назад в каталог</p>
          </ItemStepBackLink>
        </ItemStepBackWrapper>
        <div>
          <ItemInfoWrapper>
            <Slider
              itemWidth={itemWidth}
              options={{ margin: 50 }}
              singlePhotoSlider={true}
            >
              {[...Array(3).keys()].map((_, key) => (
                <ImgWrapper
                  ref={measuredRef}
                  key={key}
                  style={{ width: itemWidth }}
                >
                  {loading && <Skeleton width={570} height={372} />}
                  {!loading && (
                    <ItemImg
                      src={`/src/assets/img/categories/${category}/${currentItem.img}`}
                      alt={`${category}-img`}
                    />
                  )}
                </ImgWrapper>
              ))}
            </Slider>
            <ItemCatalogBox>
              {loading && (
                <Skeleton
                  width={200}
                  height={50}
                  style={{ marginBottom: 21 }}
                />
              )}
              {!loading && (
                <ItemCatalogTitle>{currentItem.text}</ItemCatalogTitle>
              )}
              {loading && <Skeleton width={100} />}
              {!loading && (
                <ItemText weight={true}>
                  Вес: <span>{currentItem.gramms} грамм</span>
                </ItemText>
              )}
              {!loading && currentItem.organic != 0 && (
                <div>
                  <OrganicTableWrapper>
                    <thead>
                      <tr>
                        <OrganicTitle>Белки</OrganicTitle>
                        <OrganicTitle>Углеводы</OrganicTitle>
                        <OrganicTitle>Жиры</OrganicTitle>
                        <OrganicTitle>Каллорийность</OrganicTitle>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <OrganicDiscr>
                          {currentItem.organic.protein}
                        </OrganicDiscr>
                        <OrganicDiscr>{currentItem.organic.carbs}</OrganicDiscr>
                        <OrganicDiscr>{currentItem.organic.fats}</OrganicDiscr>
                        <OrganicDiscr>
                          {currentItem.organic.calories}
                        </OrganicDiscr>
                      </tr>
                    </tbody>
                  </OrganicTableWrapper>
                </div>
              )}
              <ItemDeliveryWrapper>
                <img
                  src="/src/assets/img/delivery-icon.svg"
                  alt="delivery-icon"
                />
                <ItemDeliveryText>Доставим за 40 мин</ItemDeliveryText>
                <ItemDeliveryLink to={"/delivery-payment"}>
                  Условия доставки
                </ItemDeliveryLink>
              </ItemDeliveryWrapper>
              <ItemCompositionWrapper>
                <ItemText>Состав:</ItemText>
                {loading && (
                  <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                  </>
                )}
                {!loading && (
                  <ItemCompositionText>{currentItem.disrc}</ItemCompositionText>
                )}
              </ItemCompositionWrapper>
              {!loading && currentItem.sizes != 0 && (
                <ItemSizeWrapper>
                  <ItemSizeTitle>Размеры</ItemSizeTitle>
                  <Sizes
                    item={currentItem}
                    price={price}
                    setPrice={setPrice}
                    setExtra={(p) => setExtraPrice(p)}
                    extraPrice={extraPrice}
                  />
                </ItemSizeWrapper>
              )}
              <ItemPriceWrapper>
                {loading && <Skeleton width={90} height={30} />}
                {!loading && (
                  <Price
                    item={currentItem}
                    price={price}
                    setPrice={setPrice}
                    quantity={quantity}
                    extraPrice={extraPrice}
                  />
                )}
                <QuantityCounter count={quantity} setCount={setQuantity} />
                <OrderBtnWrapper>
                  {!loading && (
                    <OrderBtn
                      item={currentItem}
                      quantity={quantity}
                      category={category}
                      extraPrice={extraPrice}
                    />
                  )}
                </OrderBtnWrapper>
              </ItemPriceWrapper>
            </ItemCatalogBox>
          </ItemInfoWrapper>
        </div>
      </Container>
    </div>
  );
}
