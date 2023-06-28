import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import { Container, Slider, Price, Sizes } from "../index";
import {
  catalogTitle,
  paragraphFont,
  btnStyles,
} from "../../style/styling/styling";

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
  display: flex;
  align-items: center;
  gap: 16px;
`;
const ItemImg = styled.img`
  border: 1px solid #e2e1e1;
  width: 570px;
`;
const ItemcatalogTitle = styled.h1`
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
const ItemPageQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 10px;
  border: 1px solid #e2e1e1;
  border-radius: 8px;
  gap: 24px;
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
const QuantitySetter = styled.button`
  font-weight: 200;
  font-size: 28px;
  line-height: 34px;
  color: #e07153;
  border: none;
  outline: none;
  background-color: transparent;
`;
const QuantityText = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #1b1b1b;
`;
const OrderBtn = styled.button`
  ${btnStyles}
`;

export function ItemPage({ data }) {
  const [items] = data.items.read();

  const { category, item } = useParams();

  const indexOfItem = item - 1;
  const currentItem = items[category].items[indexOfItem];

  const [price, setPrice] = React.useState(currentItem.price);
  const [quantity, setQuantity] = React.useState(1);

  function handlerQuantityPlus(e) {
    e.preventDefault();
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }
  function handlerQuantityMinus(e) {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  React.useEffect(() => setPrice(currentItem.price), [currentItem.price]);

  return (
    <div className="itempage__container">
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
            <Slider obj={[0, 1, 2]} options={{ margin: 50 }}>
              {[...Array(3).keys()].map((_, id) => (
                <ItemImg
                  src={`/src/assets/img/categories/${category}/${currentItem.img}`}
                  alt={`${category}-img`}
                />
              ))}
            </Slider>
            <div>
              <ItemcatalogTitle>{currentItem.text}</ItemcatalogTitle>
              <ItemText weight={true}>
                Вес: <span>{currentItem.gramms} грамм</span>
              </ItemText>
              {currentItem.organic ? (
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
              ) : (
                ""
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
                <ItemCompositionText>{currentItem.disrc}</ItemCompositionText>
              </ItemCompositionWrapper>
              <ItemSizeWrapper>
                <ItemSizeTitle>Размеры</ItemSizeTitle>
                <Sizes item={currentItem} price={price} setPrice={setPrice} />
              </ItemSizeWrapper>
              <ItemPriceWrapper>
                <Price
                  item={currentItem}
                  price={price}
                  setPrice={setPrice}
                  quantity={quantity}
                />
                <ItemPageQuantityWrapper>
                  <QuantitySetter onClick={handlerQuantityMinus}>
                    -
                  </QuantitySetter>
                  <QuantityText>{quantity}</QuantityText>
                  <QuantitySetter onClick={handlerQuantityPlus}>
                    +
                  </QuantitySetter>
                </ItemPageQuantityWrapper>
                <OrderBtn>Заказать</OrderBtn>
              </ItemPriceWrapper>
            </div>
          </ItemInfoWrapper>
          <div className="itempage__buy-with-box"></div>
          <div className="itempage__recomendation-box"></div>
          {/* Component with feedback */}
        </div>
      </Container>
    </div>
  );
}
