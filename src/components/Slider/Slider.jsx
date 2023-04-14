import React from "react";
import "./Slider.scss";

//сделать бесконечный слайдер

export function Slider({
  children,
  obj,
  options = { margin: 0 },
  infinite = false,
}) {
  const [itemWidth, setItemWidth] = React.useState(0);
  const [sliderPosition, setSliderPosition] = React.useState(0);
  const [sliderCount, setSliderCount] = React.useState(0);
  const [pages, setPages] = React.useState([]);
  const [clonesCount, setClonesCount] = React.useState({ head: 0, tail: 0 });

  const handleResize = () => {
    setItemWidth(itemWidth);
  };

  const moveBack = () => {
    if (sliderCount > 0) {
      setSliderCount(sliderCount - 1);
    }
  };

  const moveForward = () => {
    if (sliderCount != obj.length - 1) {
      setSliderCount(sliderCount + 1);
    }
  };

  React.useEffect(() => {
    if (infinite) {
      setPages([
        React.cloneElement(children[React.Children.count(children) - 1]),
        ...children,
        React.cloneElement(children[0]),
      ]);
      setClonesCount({ head: 1, tail: 1 });
      return;
    }
    setPages(children);
  }, [children, infinite]);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [clonesCount, itemWidth]);

  React.useEffect(() => {
    setSliderPosition((itemWidth + options.margin) * sliderCount);
  }, [sliderCount, sliderPosition]);

  return (
    <div className="slider-swiper__box">
      <div className="slider-swiper__inner">
        <div onClick={moveBack} className="slider-arrow slider-arrow--left">
          <svg
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
          </svg>
        </div>
        <div
          className="slider-swiper"
          style={{
            width: itemWidth != 0 ? itemWidth * obj.length + "px" : 100 + "%",
            transform: `translate3d(-${sliderPosition}px, 0, 0)`,
          }}
        >
          {React.Children.map(pages, (child) => {
            return React.cloneElement(child, {
              width: itemWidth,
              setWidth: setItemWidth,
            });
          })}
        </div>
        <div onClick={moveForward} className="slider-arrow slider-arrow--right">
          <svg
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
          </svg>
        </div>
      </div>
    </div>
  );
}
