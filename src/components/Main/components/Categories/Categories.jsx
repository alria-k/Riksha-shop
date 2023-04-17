import React from "react";
import { CategoriesNav, ItemCard } from "../../index";
import "./Categories.scss";

export function Categories({ obj }) {
  const [category, setCategory] = React.useState("rolls");

  const items = obj.items.read();
  const sale = obj.sale.read();

  return (
    <div className="categories__container">
      <h1 className="blocks__title">Категории</h1>
      <CategoriesNav />
      <div className="categories__list">
        {items.map((elem) => {
          return [...Array(20).keys()].map((e, index) => {
            if (index < elem[category].items.length) {
              return (
                <ItemCard
                  key={index}
                  obj={elem[category].items[index]}
                  imgURL={category}
                />
              );
            }
          });
        })}
      </div>
    </div>
  );
}
