import React from "react";
import classNames from "classnames";
import { ItemCard, SaleCard, CategoryPageRedict } from "../index";

export function CategoriesList({ obj, category }) {
  const [currPage, setCurrPage] = React.useState(1);
  const itemsOnOnePage = 10;

  console.log(obj);

  // let pages = Math.floor(items[category].items.length / itemsOnOnePage);

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
        {category == "sale" ? (
          <React.Suspense fallback={<div>lol</div>}>
            <SaleCard obj={obj} />
          </React.Suspense>
        ) : (
          [...Array(itemsOnOnePage * currPage).keys()].map((_, index) => {
            return (
              <React.Suspense key={index} fallback={<div>lol</div>}>
                <ItemCard obj={obj} category={category} i={index} />
              </React.Suspense>
            );
          })
        )}
      </div>
      {/* {pages ? (
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
      ) : null} */}
    </>
  );
}
