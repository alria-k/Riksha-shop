import React from "react";
import { LazyImg } from "../../../../components";
import "./SliderMain.scss";

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
        <LazyImg src={elem.src} alt={elem.alt} clsName={"lol"} />
        <div className="sale-slider__btn">
          <a className="sale-slider__link" href="#f">
            Подробнее
          </a>
        </div>
      </div>
    );
  });
}
