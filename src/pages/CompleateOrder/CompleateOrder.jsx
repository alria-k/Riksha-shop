import { useState } from "react";
import styled from "styled-components";

import { catalogTitle, paragraphFont } from "../../style/styling/styling";
import {
  FormBox,
  CartList,
  Container,
  RadioButton,
  Checkbox,
  Input,
  QuantityCounter,
  OrderBtn,
} from "../";

const OrderSummaryBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CartListBox = styled.div`
  max-width: 600px;
  width: 100%;
`;
const Title = styled.h1`
  ${catalogTitle}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;
const RadioBox = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 18px;
`;
const ItemDeliveryWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 8px;
`;
const ItemDeliveryText = styled.p`
  ${paragraphFont}
  font-weight: 500;
`;
const PriceText = styled.p`
  ${paragraphFont}
  font-weight: 500;
`;
const InputGridBox = styled.div`
  display: grid;
  gap: 8px;
  grid: repeat(2, 1fr) / repeat(3, 33%);
  :nth-child(1) {
    display: none;
  }
`;
const MapImage = styled.img`
  margin-top: 8px;
`;
const OrderDetailsText = styled.p``;
const BorderBox = styled.div``;
const QuantityBox = styled.div``;
const QuantityInner = styled.div``;
const SummaryBox = styled.div``;
const OrderBtnWrapper = styled.div``;

const deliveryParams = ["Ближайшее время", "Самовывоз", "На дату / время"];
const paymentParams = ["Наличные", "Онлайн оплата"];

export function CompleateOrder() {
  const [deliveryOption, setDeliveryOption] = useState(0);
  const [paymentOption, setPaymentOption] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [peopleAmt, setPeopleAmt] = useState(1);
  const [sticks, setSticks] = useState(1);

  return (
    <Container>
      <Title>Оформление заказа</Title>
      <OrderSummaryBox>
        <CartListBox>
          <CartList />
        </CartListBox>
        <Form>
          <FormBox step="1" title="Контактные данные">
            <InputBox>
              <Input placeholder="Ваше Имя" type="text" name="name" />
              <Input placeholder="Телефон" type="text" name="phone" />
            </InputBox>
          </FormBox>
          <FormBox step="2" title="Параметры доставки">
            <RadioBox>
              {deliveryParams.map((text, id) => (
                <RadioButton
                  key={id}
                  setIsChecked={(e) => setDeliveryOption(e.target.value)}
                  name={deliveryOption}
                  value={id}
                  text={text}
                />
              ))}
            </RadioBox>
            <InputGridBox>
              <Input placeholder="Улица" type="text" name="street" />
              <Input placeholder="Дом" type="text" name="house" />
              <Input placeholder="Квартира" type="text" name="app" />
              <Input
                placeholder="Подьезд/Этаж/Домофон"
                type="text"
                name="floor"
              />
            </InputGridBox>
            <MapImage src="/src/assets/img/map.png" alt="map-image" />
            <ItemDeliveryWrapper>
              <img
                src="/src/assets/img/delivery-icon.svg"
                alt="delivery-icon"
              />
              <ItemDeliveryText>Доставим за 40 мин</ItemDeliveryText>
            </ItemDeliveryWrapper>
          </FormBox>
          <FormBox step="3" title="Параметры оплаты">
            <RadioBox>
              {paymentParams.map((text, id) => (
                <RadioButton
                  key={id}
                  setIsChecked={(e) => setPaymentOption(e.target.value)}
                  name={paymentOption}
                  value={id}
                  text={text}
                />
              ))}
            </RadioBox>
            <ItemDeliveryText>Подготовить сдачу с :</ItemDeliveryText>
            <InputBox>
              <Input placeholder="Введите сумму" type="text" name="name" />
              <Checkbox
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                text="Без сдачи"
                name="change"
              />
            </InputBox>
          </FormBox>
          <FormBox step="4" title="Последний шаг">
            <BorderBox>
              <InputBox>
                <QuantityBox>
                  <QuantityInner>
                    Количество персон
                    <QuantityCounter
                      count={peopleAmt}
                      setCount={setPeopleAmt}
                    />
                  </QuantityInner>
                  <QuantityInner>
                    Учебные палочки
                    <QuantityCounter count={sticks} setCount={setSticks} />
                  </QuantityInner>
                </QuantityBox>
                <PriceText>Бесплатно</PriceText>
              </InputBox>
            </BorderBox>
            <BorderBox>
              <InputBox>
                <OrderDetailsText>Сумма заказа</OrderDetailsText>
                <PriceText>~ ₽</PriceText>
              </InputBox>
              <InputBox>
                <OrderDetailsText>Стоимость доставки</OrderDetailsText>
                <PriceText>~ ₽</PriceText>
              </InputBox>
            </BorderBox>
            <SummaryBox>
              <InputBox>
                <OrderDetailsText>Итоговая сумма заказа</OrderDetailsText>
                <PriceText>~ ₽</PriceText>
              </InputBox>
              <Input
                placeholder="Комментарий к заказу"
                type="text"
                name="comment"
              />
            </SummaryBox>
            <OrderBtnWrapper>
              <OrderBtn>Подтвердить заказ</OrderBtn>
            </OrderBtnWrapper>
          </FormBox>
        </Form>
      </OrderSummaryBox>
    </Container>
  );
}
