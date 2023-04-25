import React from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import {
  ItemCard,
  CategoryPageRedict,
  Container,
  Sortby,
  CategoriesList,
} from "../index";

import "./Catalog.scss";

//сделать хлебные крошки (bread crumbs)

export function Catalog({ data }) {
  const [currCategory, setCurrCategory] = React.useState(null);
  const [sort, setSort] = React.useState("default");
  const { category } = useParams();

  const [items] = data.items.read();

  function handlerCategory(event, category) {
    event.preventDefault();
    if (category == currCategory) {
      setCurrCategory(null);
      return;
    }
    setCurrCategory(category);
  }

  function handlerSortBy(sort) {
    setSort(sort);
  }

  return (
    <div className="catalog__container">
      <Container>
        <div className="catalog__title">{items[category].title}</div>
        {/* add bread crumbs */}
        {items[category].categories.length && (
          <div className="catalog-categories">
            <ul className="catalog-categories__list">
              {items[category].categories.map((elem) => {
                return (
                  <li key={elem.id} className="catalog-categories__item">
                    <button
                      onClick={(e) => handlerCategory(e, elem.key)}
                      className={classNames({
                        "catalog-categories__btn": true,
                        "catalog-categories__btn--active":
                          currCategory == elem.key,
                      })}
                    >
                      <img
                        className="catalog-categories__img"
                        src={`./src/assets/img/categories-icons/${elem.icon}`}
                        alt=""
                      />
                      {elem.text}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {items[category].sortby && (
          <div className="catalog-sortby">
            <p className="catalog-sortby__text">Сортировка</p>
            <Sortby handler={handlerSortBy} />
          </div>
        )}
        <CategoriesList obj={data} category={category} />
      </Container>
    </div>
  );
}
