import React from "react";
import classNames from "classnames";
import { ItemCard, SaleCard, CategoryPageRedict } from "../index";

export function CategoriesList({ obj, category }) {
  const [currPage, setCurrPage] = React.useState(1);
  const [quantityOfItems, setQuantityOfItems] = React.useState(null);
  const itemsOnOnePage = 10;

  let pages = Math.floor(quantityOfItems / itemsOnOnePage);

  React.useEffect(() => {
    setCurrPage(1);
  }, [category]);

  return (
    <>
      <div className="categories__list">
        {category == "sale" ? (
          <React.Suspense fallback={<div>lol</div>}>
            <SaleCard obj={obj} />
          </React.Suspense>
        ) : (
          [...Array(itemsOnOnePage * currPage).keys()].map((_, index) => {
            return (
              <React.Suspense key={index} fallback={<div>lol</div>}>
                <ItemCard
                  obj={obj}
                  category={category}
                  i={index}
                  setquantity={setQuantityOfItems}
                />
              </React.Suspense>
            );
          })
        )}
      </div>
      {pages != 1 && (
        <div
          className={classNames({
            categories__pages: true,
            "categories__pages--end": !pages,
          })}
        >
          <CategoryPageRedict
            pages={pages}
            activePage={currPage}
            setPage={setCurrPage}
          />
        </div>
      )}
    </>
  );
}
