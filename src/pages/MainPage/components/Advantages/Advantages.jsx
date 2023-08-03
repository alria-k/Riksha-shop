import styled from "styled-components";

import { paragraphFont } from "../../../../style/styling/styling";

const AdvantagesWrapper = styled.div`
  margin-bottom: 145px;
`;
const AdvantagesList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;
const AdvantagesListItem = styled.li`
  text-align: center;
`;
const AdvantagesImg = styled.img`
  width: 180px;
  height: 132px;
  margin: 0 auto;
  margin-bottom: 12px;
`;
const AdvantagesTitle = styled.h6`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #1b1b1b;
  margin-bottom: 2px;
`;
const AdvantagesText = styled.p`
  ${paragraphFont}
`;

const advantagesImg = [
  {
    id: 1,
    title: "доставка",
    text: "при заказе от 600 ₽",
    img: "/src/assets/img/advantages/1.svg",
    alt: "delivery-icon",
  },
  {
    id: 2,
    title: "за 60 мин",
    text: "или проморол за опоздание",
    img: "/src/assets/img/advantages/2.svg",
    alt: "one-min-icon",
  },
  {
    id: 3,
    title: "бонусы",
    text: "бонусная система 1 ₽ = 1 бонус",
    img: "/src/assets/img/advantages/3.svg",
    alt: "bonus-icon",
  },
  {
    id: 4,
    title: "продукты",
    text: "Никаких заготовок!",
    img: "/src/assets/img/advantages/4.svg",
    alt: "grocery-icon",
  },
];

export function Advantages() {
  return (
    <AdvantagesWrapper>
      <AdvantagesList>
        {advantagesImg.map((elem) => {
          return (
            <AdvantagesListItem key={elem.id}>
              <AdvantagesImg src={elem.img} alt={elem.alt} />
              <AdvantagesTitle>{elem.title}</AdvantagesTitle>
              <AdvantagesText>{elem.text}</AdvantagesText>
            </AdvantagesListItem>
          );
        })}
      </AdvantagesList>
    </AdvantagesWrapper>
  );
}
