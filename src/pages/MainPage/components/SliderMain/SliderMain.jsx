import React from "react";
import styled from "styled-components";

import { LazyImg } from "../../../../components";

const SliderItem = styled(({ width, ...props }) => <div {...props} />)`
  min-width: 100%;
  width: 100%;
  position: relative;
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

export function SliderMain({ obj, width, setWidth }) {
  const ref = React.useRef(null);

  const resizeBox = () => {
    setWidth(ref.current.offsetWidth);
    return width;
  };

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }
    resizeBox();
  }, [ref.current]);

  React.useLayoutEffect(() => {
    window.addEventListener("resize", resizeBox);
    return () => window.removeEventListener("resize", resizeBox);
  });

  return obj.map((elem) => (
    <SliderItem key={elem.id} ref={ref} style={{ width: width + "px" }}>
      <SliderTextWrapper>
        <SliderTitle>{elem.text}</SliderTitle>
        <SliderText>{elem.discr}</SliderText>
      </SliderTextWrapper>
      <LazyImg src={elem.src} alt={elem.alt} clsName={"lol"} />
      <SliderLinkWrapper>
        <SliderLink href="#f">Подробнее</SliderLink>
      </SliderLinkWrapper>
    </SliderItem>
  ));
}
