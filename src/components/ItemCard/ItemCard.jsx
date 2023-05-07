import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Price } from "../Price/Price";
import { Sizes } from "../Sizes/Sizes";
import "./ItemCard.scss";

export function ItemCard({ obj, i, setquantity }) {
  const categories = useSelector((state) => state.category.category);
  const [items] = obj.items.read();

  let currentItem = categories != "sale" && items[categories].items[i];

  const [price, setPrice] = React.useState(0);

  React.useEffect(() => {
    if (!currentItem) {
      return;
    }
    setPrice(currentItem.price);
    setquantity(items[categories].items.length);
  }, [currentItem]);

  return (
    categories != "sale" && (
      <div key={currentItem.id} className="item-card__inner">
        <img
          className="item-card-img"
          src={`/src/assets/img/categories/${categories}/${currentItem.img}`}
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
              to={`/${categories}/${currentItem.id}`}
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
    )
  );
}
