import React from "react";
import "./ItemCard.scss";

// исправить изменение состояние чекбокса в клонированных элементах

export function ItemCard({ obj, imgURL }) {
  const [extraPrice, setExtraPrice] = React.useState(0);
  const [price, setPrice] = React.useState(obj.price);

  function handleRadio(event, price) {
    if (event.target.checked) {
      setExtraPrice(price);
      setPrice(obj.price);
    }
    return;
  }

  React.useEffect(() => {
    setPrice(price + extraPrice);
  }, [extraPrice]);

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
                  <label htmlFor="size-pizza" className="size-pizza__custom">
                    {elem.cm} см
                    <input
                      defaultChecked={index === 0}
                      onChange={(e) => handleRadio(e, elem.extraPay)}
                      type="radio"
                      name="size-pizza"
                      className="size-pizza__radio"
                    />
                  </label>
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
          <h2 className="purchase__price">{price} ₽</h2>
          <button className="purchase__btn">Заказать</button>
        </div>
      </div>
    </div>
  );
}
