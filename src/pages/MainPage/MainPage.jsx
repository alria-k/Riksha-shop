import React from "react";
import {
  Advantages,
  SliderMain,
  NewItems,
  Sale,
  Categories,
  About,
  SocialMedia,
} from "./index";
import { Slider, Container } from "../index";

const saleImg = [
  {
    id: "1",
    text: `Вкуснейшие сеты от`,
    discr: "700 ₽",
    src: "/src/assets/img/slider/1.jpg",
    alt: "first-sale",
  },
  {
    id: "2",
    text: `Калифорния в подарок при первом заказе`,
    discr: "от 1500 ₽",
    src: "/src/assets/img/slider/2.jpg",
    alt: "second-sale",
  },
];
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
    <>
      <Container>
        <div className="sale-slider__container">
          <Slider obj={saleImg} options={{ margin: 30 }}>
            <SliderMain obj={saleImg} />
          </Slider>
        </div>
        <Advantages imageArr={advantagesImg} />
        <React.Suspense fallback={<div>Loading...</div>}>
          <NewItems />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Sale />
        </React.Suspense>
        <Categories />
      </Container>
      <About />
      <Container>
        <SocialMedia />
      </Container>
    </>
  );
}
