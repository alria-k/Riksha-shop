import React from "react";
import { Link } from "react-router-dom";
import { Price } from "../Price/Price";
import { Sizes } from "../Sizes/Sizes";
import "./ItemCard.scss";

export function ItemCard({ obj, i, category }) {
  const [price, setPrice] = React.useState(0);

  let currentItem = obj[category].items[i];

  return (
    i < obj[category].items.length && (
      <div className="item-card__inner">
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
            <Sizes item={currentItem} price={price} setPrice={setPrice} />
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
            <Price item={currentItem} price={price} setPrice={setPrice} />
            <button className="purchase__btn">Заказать</button>
          </div>
        </div>
      </div>
    )
  );
}
