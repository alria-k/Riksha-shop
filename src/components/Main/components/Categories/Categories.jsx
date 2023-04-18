import React from "react";
import { CategoriesNav, ItemCard } from "../../index";
import "./Categories.scss";

export function Categories({ obj }) {
  const [category, setCategory] = React.useState("pizza");
  const [currPage, setCurrPage] = React.useState(1);
  const amoutOfItems = 15;
  let pages;

  const items = obj.items.read();
  const sale = obj.sale.read();

  function handlerCategory(event, targetCategory) {
    event.preventDefault();
    setCategory(targetCategory);
  }

  return (
    <div className="categories__container">
      <h1 className="blocks__title">Категории</h1>
      <CategoriesNav
        swtch={true}
        handler={handlerCategory}
        currCategory={category}
      />
      <div className="categories__list">
        {items.map((elem, index) => {
          pages = Math.floor(elem[category].items.length / amoutOfItems);
          return [...Array(amoutOfItems * currPage).keys()].map((e, index) => {
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
      {pages ? <div>lol</div> : null}
    </div>
  );
}
