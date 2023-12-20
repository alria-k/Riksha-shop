import styled from "styled-components";

import { catalogTitle } from "../../style/styling/styling";
import { Container } from "../";

const Title = styled.h1`
  ${catalogTitle}
`;
const DeliveryWrapper = styled.div`
  margin-bottom: 100px;
  ${Title} {
    margin-bottom: 56px;
  }
`;
const InfoBoxesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;
const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const ColorText = styled(({ color = "#1B1B1B", ...props }) => (
  <h2 {...props} />
))`
  color: ${({ color }) => color};
`;
const PlainText = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const TextWrapper = styled.div`
  ${PlainText} {
    display: flex;
    gap: 5px;
    :not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;
const BoldText = styled(PlainText)`
  font-weight: 600;
`;
const MapImg = styled.img`
  margin-bottom: 50px;
  width: 100%;
`;
const BiggerBoldText = styled(BoldText)`
  font-size: 20px;
  display: inline;
`;
const BiggerPlainText = styled(PlainText)`
  font-weight: 300;
  font-size: 20px;
`;
const DiscrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const PaymentWrapper = styled.div`
  ${Title} {
    margin-bottom: 72px;
  }
`;
const OptionsBox = styled.div`
  max-width: 392px;
  position: relative;
  text-align: center;
  padding: 75px 5px 57px;
  border: 1px solid #e2e1e1;
  ${BiggerBoldText} {
    margin-bottom: 8px;
    display: block;
  }
`;
const OptionImage = styled.img`
  position: absolute;
  padding: 24px;
  background-color: #fbfbfb;
  top: -50px;
  left: 35%;
`;

export function DeliveryPayment() {
  return (
    <Container>
      <DeliveryWrapper>
        <Title>Доставка</Title>
        <InfoBoxesWrapper>
          <InfoBox>
            <img src="/src/assets/img/Green-zone-img.png" alt="Green zone" />
            <TextWrapper>
              <ColorText color="#7E9E1E">Зеленая зона</ColorText>
              <PlainText>
                Доставка:<BoldText> до 29 мин</BoldText>
              </PlainText>
              <PlainText>
                Минимальная сумма заказа:<BoldText> 600 ₽</BoldText>
              </PlainText>
              <PlainText>
                Доставляем<BoldText> БЕСПЛАТНО</BoldText>
              </PlainText>
            </TextWrapper>
          </InfoBox>
          <InfoBox>
            <img src="/src/assets/img/Yellow-zone-img.png" alt="Yellow zone" />
            <TextWrapper>
              <ColorText color="#F1C400">Желтая зона</ColorText>
              <PlainText>
                Доставка:<BoldText> до 59 мин</BoldText>
              </PlainText>
              <PlainText>
                Минимальная сумма заказа:<BoldText> 800 ₽</BoldText>
              </PlainText>
              <PlainText>
                Доставляем<BoldText> БЕСПЛАТНО</BoldText>
              </PlainText>
            </TextWrapper>
          </InfoBox>
        </InfoBoxesWrapper>
        <MapImg src="/src/assets/img/map.png" alt="map" />
        <DiscrWrapper>
          <BiggerBoldText>Информация</BiggerBoldText>
          <BiggerPlainText>
            Сервис доставки суши в Краснодаре «Рикша» предлагает чрезвычайно
            удобный механизм доставки и оплаты. Мы считаем, что наши стандарты
            работы должны быть классикой и комфортом для заказчика.
            <BiggerBoldText>
              Прием заказов на доставку с 11:00 до 22:30.
              <br />
              <br />
            </BiggerBoldText>
            Итак, начнем по доставке. Мы делим Краснодар на зоны доставки —
            зеленую и желтую. Для каждой зоны мы четко определяем время приезда
            курьера и в случае задержки Вы получаете приятный сюрприз, о котором
            мы поговорим чуть позже. Для каждой из зон доставка является
            абсолютно бесплатной.
            <br />
            <br />
            Доставка в зеленую зону Краснодара — до 29 минут (с 10:00 до 23:00.
            В другое время доставка в зеленую зону до 59 минут). Доставка в
            желтую зону — до 59 минут. Мы очень ценим Ваше время, поэтому всегда
            стараемся уложиться в минимальные сроки и измеряем время минутами,
            ведь каждая минута важна. Согласитесь, приятно получить вкусные суши
            в течение 29 минут, правда?
            <br />
            <br />
            Если курьер опаздывает, Вы получаете не только извинения, но и
            промокод на бесплатный ролл при следующем заказе!
          </BiggerPlainText>
        </DiscrWrapper>
      </DeliveryWrapper>
      <PaymentWrapper>
        <Title>Оплата</Title>
        <InfoBoxesWrapper>
          <OptionsBox>
            <OptionImage src="/src/assets/img/payment-option-1.png" />
            <BiggerBoldText>Оплата наличными</BiggerBoldText>
            <PlainText>
              Рассчитывайтесь за свои любимые суши Рикша наличными при
              получении.
            </PlainText>
          </OptionsBox>
          <OptionsBox>
            <OptionImage src="/src/assets/img/payment-option-2.png" />
            <BiggerBoldText>Оплата онлайн </BiggerBoldText>
            <PlainText>
              Рассчитывайтесь за свои любимые суши Рикша онлайн на сайте
            </PlainText>
          </OptionsBox>
          <OptionsBox>
            <OptionImage src="/src/assets/img/payment-option-3.png" />
            <BiggerBoldText>Оплата бонусами</BiggerBoldText>
            <PlainText>
              Рассчитывайтесь за свои любимые суши Рикша личными бонусам
            </PlainText>
          </OptionsBox>
        </InfoBoxesWrapper>
        <div>
          <BiggerPlainText>
            Мы предлагаем Вам 3 самых распространенных варианта для расчета:
            наличные, оплата онлайн или бонусами. Просто отметьте наиболее
            удобный для Вас способ оплаты при оформлении заказа на сайте или
            сообщите об этом оператору по телефону.
            <br />
            <br />
            Доставка «Рикша» – это четкие стандарты работы, высокий уровень
            сервиса и забота о каждом госте. Мы ежедневно развиваемся, чтобы
            услышать три слова «Рикша – это любовь».
          </BiggerPlainText>
        </div>
        <DiscrWrapper></DiscrWrapper>
      </PaymentWrapper>
    </Container>
  );
}
