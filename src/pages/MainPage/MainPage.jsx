import React from "react";
import styled from "styled-components";

import {
  Advantages,
  SliderMain,
  NewItems,
  Sale,
  Categories,
  About,
  SocialMedia,
} from "./index";
import { Container } from "../index";

const MainWrapper = styled.main`
  margin-bottom: 187px;
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

export function MainPage() {
  return (
    <MainWrapper>
      <Container>
        <SliderMain />
        <Advantages imageArr={advantagesImg} />
        <React.Suspense fallback={<div>Loading...</div>}>
          <NewItems goodsData={goodsPromise} />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Sale saleData={salePromise} />
        </React.Suspense>
        <Categories saleData={salePromise} goodsData={goodsPromise} />
      </Container>
      <About />
      <Container>
        <SocialMedia />
      </Container>
    </MainWrapper>
  );
}
