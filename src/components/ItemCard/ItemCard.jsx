import React from "react";
import "./ItemCard.scss";

export function ItemCard({ obj, imgURL }) {
  const [extraPrice, setExtraPrice] = React.useState(0);
  const [checked, setChecked] = React.useState(0);
  const [price, setPrice] = React.useState(obj.price);

  function handleChange(event, priceVal, i) {
    if (event.target.checked) {
      setChecked(i);
      setExtraPrice(priceVal);
      setPrice(obj.price);
    }
    return;
  }

  React.useEffect(() => {
    setPrice(price + extraPrice);
  }, [extraPrice]);

  React.useEffect(() => {
    setPrice(obj.price);
    setChecked(0);
    setExtraPrice(0);
  }, [obj.price]);

  return (
    <div className="item-card__inner">
      <img
        className="item-card-img"
        src={`./src/assets/img/categories/${imgURL}/${obj.img}`}
        alt=""
      />
      <div className="item-card">
        <div className="item-card__info">
          <div className="info-text__box">
            <p className="item-card__info-text">{obj.gramms} грамм</p>
            {obj.calories ? (
              <p className="item-card__info-text">{obj.calories} каллорий</p>
            ) : (
              ""
            )}
          </div>
          {obj.sizes ? (
            <div className="info-options__box">
              <div className="size-pizza__extra-pay">+{extraPrice} ₽</div>
              {obj.sizes.map((elem, index) => {
                return (
                  <form key={index} className="size-pizza__box">
                    <input
                      checked={index == checked}
                      onChange={(e) => handleChange(e, elem.extraPay, index)}
                      type="radio"
                      name="size-pizza"
                      className="size-pizza__radio"
                    />
                    <label htmlFor="size-pizza" className="size-pizza__custom">
                      {elem.cm} см
                    </label>
                  </form>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="item-card__discr">
          <h1 className="discr__title">{obj.text}</h1>
          <p className="discr__p">{obj.disrc}</p>
        </div>
        <div className="item-card__purchase">
          {obj.sale ? (
            <h2 className="purchase__price">
              <span className="purchase__old-price">{price} ₽</span>
              {Math.round(price - (price / 100) * obj.sale)} ₽
            </h2>
          ) : (
            <h2 className="purchase__price">{price} ₽</h2>
          )}
          <button className="purchase__btn">Заказать</button>
        </div>
      </div>
    </div>
  );
}
