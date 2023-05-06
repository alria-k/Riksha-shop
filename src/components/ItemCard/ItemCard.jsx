import React from "react";
import { Link } from "react-router-dom";
import { Price } from "../Price/Price";
import { Sizes } from "../Sizes/Sizes";
import "./ItemCard.scss";

export function ItemCard({ obj, category, i, setquantity }) {
  const [items] = obj.items.read();

  let currentItem = items[category].items[i];

  const [price, setPrice] = React.useState(currentItem.price);

  React.useEffect(() => {
    setPrice(currentItem.price);
    setquantity(items[category].items.length);
  }, [currentItem.price]);

  return items[category].items.length > i ? (
    <div key={currentItem.id} className="item-card__inner">
      <img
        className="item-card-img"
        src={`/src/assets/img/categories/${category}/${currentItem.img}`}
        alt=""
      />
      <div className="item-card">
        <div className="item-card__info">
          <div className="info-text__box">
            <p className="item-card__info-text">{currentItem.gramms} грамм</p>
            {currentItem.organic ? (
              <p className="item-card__info-text">
                {currentItem.organic.calories} каллорий
              </p>
            ) : (
              ""
            )}
          </div>
          <Sizes item={currentItem} price={price} priceSetter={setPrice} />
        </div>
        <div className="item-card__discr">
          <Link
            className="item-card__link"
            to={`/${category}/${currentItem.id}`}
          >
            <h1 className="discr__title">{currentItem.text}</h1>
          </Link>
          <p className="discr__p">{currentItem.disrc}</p>
        </div>
        <div className="item-card__purchase">
          <Price item={currentItem} price={price} />
          <button className="purchase__btn">Заказать</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="categories__empty">В этой категории нету товаров.</div>
  );
}
