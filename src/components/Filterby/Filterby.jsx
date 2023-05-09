import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import "./Filterby.scss";

export function Filterby({ obj }) {
  const categories = useSelector((state) => state.category.category);
  const [currCategory, setCurrCategory] = React.useState(null);

  const [items] = obj.items.read();

  function handlerCategory(event, category) {
    event.preventDefault();
    if (category == currCategory) {
      setCurrCategory(null);
      return;
    }
    setCurrCategory(category);
  }

  return (
    items[categories].categories.length && (
      <div className="catalog-categories">
        <ul className="catalog-categories__list">
          {items[categories].categories.map((elem) => {
            return (
              <li key={elem.id} className="catalog-categories__item">
                <button
                  onClick={(e) => handlerCategory(e, elem.key)}
                  className={classNames({
                    "catalog-categories__btn": true,
                    "catalog-categories__btn--active": currCategory == elem.key,
                  })}
                >
                  <img
                    className="catalog-categories__img"
                    src={`/src/assets/img/categories-icons/${elem.icon}`}
                    alt=""
                  />
                  {elem.text}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
}
