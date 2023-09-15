import React, { Children } from "react";
import styled from "styled-components";

const SliderWrapper = styled.div`
  position: relative;
`;
const SliderInner = styled.div`
  overflow-x: hidden;
`;
const SliderSwiper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  max-width: 100%;
  padding-bottom: 65px;
  transition: transform 0.2s ease-in-out;
`;
const SliderArrow = styled.div`
  position: absolute;
  cursor: pointer;
  padding: 28px 24px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 100%;
  top: 38%;
  z-index: 3;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      svg {
        path {
          fill: #c95c3f;
        }
      }
    }
  }
  &:nth-child(3) {
    right: -40px;
  }
  &:nth-child(1) {
    left: -40px;
  }
`;
export const RightArrow = styled.svg`
  transform: rotate(180deg);
  path {
    transition: fill 0.1s ease-in-out, transform 0.1s ease-in-out;
  }
`;
const LeftArrow = styled.svg`
  transform: rotate(0deg);
  path {
    transition: fill 0.1s ease-in-out, transform 0.1s ease-in-out;
  }
`;

//сделать бесконечный слайдер

export function Slider({
  children,
  itemWidth,
  options = { margin: 0 },
  singlePhotoSlider = false,
}) {
  const [sliderCount, setSliderCount] = React.useState(0);
  const defaultValue = "100%";

  function widthSetter() {
    if (!itemWidth) {
      return defaultValue;
    }
    if (singlePhotoSlider) {
      return itemWidth;
    }
    return itemWidth * (Children.count(children) - 1) + options.margin;
  }

  return (
    <SliderWrapper>
      <SliderInner>
        <SliderArrow
          onClick={() => sliderCount > 0 && setSliderCount(sliderCount - 1)}
        >
          <LeftArrow
            width="33"
            height="12"
            viewBox="0 0 33 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM33 5.25L1 5.25V6.75L33 6.75V5.25Z"
              fill="#E2E1E1"
            />
          </LeftArrow>
        </SliderArrow>
        <SliderSwiper
          style={{
            width: widthSetter(),
            transform: `translate3d(-${
              (itemWidth + options.margin) * sliderCount
            }px, 0, 0)`,
          }}
        >
          {children}
        </SliderSwiper>
        <SliderArrow
          onClick={() =>
            sliderCount != Children.count(children) - 1 &&
            setSliderCount(sliderCount + 1)
          }
        >
          <RightArrow
            width="33"
            height="12"
            viewBox="0 0 33 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM33 5.25L1 5.25V6.75L33 6.75V5.25Z"
              fill="#E2E1E1"
            />
          </RightArrow>
        </SliderArrow>
      </SliderInner>
    </SliderWrapper>
  );
}
