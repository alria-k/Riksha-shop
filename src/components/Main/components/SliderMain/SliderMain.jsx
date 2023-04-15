import React from "react";
import "./SliderMain.scss";

export function SliderMain({ obj, width, setWidth }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }
    setWidth(ref.current.getBoundingClientRect().width);
  });

  return obj.map((elem) => {
    return (
      <div
        key={elem.id}
        ref={ref}
        className="sale-slider__item"
        style={{ width: width + "px" }}
      >
        <div className="sale-slider__text">
          <h1 className="sale-slider__title">{elem.text}</h1>
          <p className="sale-slider__disrc">{elem.discr}</p>
        </div>
        <img className="sale-slider-img" src={elem.src} alt={elem.alt} />
        <div className="sale-slider__btn">
          <a className="sale-slider__link" href="#f">
            Подробнее
          </a>
        </div>
      </div>
    );
  });
}
