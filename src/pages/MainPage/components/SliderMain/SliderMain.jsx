import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Slider } from "../../../../ui";
import { LazyImg } from "../../../../ui";

const SliderItem = styled.div`
  min-width: 100%;
  width: 100%;
  position: relative;
  height: 430px;
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
const SliderTextWrapper = styled.div`
  position: absolute;
  transform: translateX(60px);
  top: 117px;
  max-width: 470px;
  width: 100%;
  user-select: none;
`;
const SliderTitle = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 51px;
  color: #1b1b1b;
`;
const SliderText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #1b1b1b;
`;
const SliderLinkWrapper = styled.div`
  position: absolute;
  z-index: 5;
  bottom: 10px;
  transform: translate3d(100px, 0, 0);
  user-select: none;
`;
const SliderLink = styled.a`
  padding: 74px 36px;
  background: #e07153;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  border-radius: 100%;
  background-image: url("/src/assets/img/bg-btns.svg");
`;

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

export function SliderMain() {
  const ref = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(
    () => setItemWidth(ref.current.getBoundingClientRect().width),
    [ref.current]
  );

  return (
    <Slider itemWidth={itemWidth} options={{ margin: 30 }}>
      {saleImg.map((saleImage) => (
        <SliderItem key={saleImage.id} ref={ref} style={{ width: itemWidth }}>
          <SliderTextWrapper>
            <SliderTitle>{saleImage.text}</SliderTitle>
            <SliderText>{saleImage.discr}</SliderText>
          </SliderTextWrapper>
          <LazyImg src={saleImage.src} alt={saleImage.alt} />
          <SliderLinkWrapper>
            <SliderLink href="#f">Подробнее</SliderLink>
          </SliderLinkWrapper>
        </SliderItem>
      ))}
    </Slider>
  );
}
