import React from "react";
import classNames from "classnames";
import { ItemCard, SaleCard, CategoryPageRedict } from "../index";

export function CategoriesList({ obj, category }) {
  const [currPage, setCurrPage] = React.useState(1);
  const itemsOnOnePage = 15;

  const [items] = obj.items.read();
  const [sale] = obj.sale.read();

  const allItems = Object.assign(items, sale);
  let pages = Math.floor(allItems[category].items.length / itemsOnOnePage);

  function handlerPages(event, page) {
    event.preventDefault();
    setCurrPage(page);
  }

  React.useEffect(() => {
    setCurrPage(1);
  }, [category]);

  return (
    <>
      <div className="categories__list">
        {allItems[category].items.length == 0 && (
          <div className="categories__empty">
            В этой категории нету товаров.
          </div>
        )}
        {[...Array(itemsOnOnePage * currPage).keys()].map((e, index) => {
          if (category == "sale" && index < allItems[category].items.length) {
            return (
              <SaleCard
                key={allItems[category].items[index].id}
                obj={allItems[category].items[index]}
                bgURL={category}
              />
            );
          }
          if (index < allItems[category].items.length) {
            return (
              <ItemCard
                key={allItems[category].items[index].id}
                obj={allItems[category].items[index]}
                imgURL={category}
              />
            );
          }
        })}
      </div>
      {pages ? (
        <div
          className={classNames({
            categories__pages: true,
            "categories__pages--end": !pages,
          })}
        >
          <CategoryPageRedict
            pages={pages}
            activePage={currPage}
            setPage={handlerPages}
          />
        </div>
      ) : null}
    </>
  );
}
