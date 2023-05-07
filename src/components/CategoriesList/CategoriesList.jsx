import React from "react";
import { useSelector } from "react-redux";
import { ItemCard, SaleCard, CategoryPageRedict } from "../index";

export function CategoriesList({ obj }) {
  const categories = useSelector((state) => state.category.category);

  const [currPage, setCurrPage] = React.useState(1);
  const [quantityOfItems, setQuantityOfItems] = React.useState(1);
  const itemsOnOnePage = 15;

  React.useEffect(() => {
    setCurrPage(1);
  }, [categories]);

  return (
    <>
      <div className="categories__list">
        {categories &&
          [...Array(itemsOnOnePage * currPage).keys()].map((_, index) => {
            if (quantityOfItems > index) {
              return (
                <>
                  <React.Suspense fallback={<div>lol</div>}>
                    <SaleCard
                      obj={obj}
                      i={index}
                      setquantity={setQuantityOfItems}
                    />
                  </React.Suspense>
                  <React.Suspense fallback={<div>lol</div>}>
                    <ItemCard
                      obj={obj}
                      i={index}
                      setquantity={setQuantityOfItems}
                    />
                  </React.Suspense>
                </>
              );
            }
          })}
      </div>
      <CategoryPageRedict
        allItems={quantityOfItems}
        activePage={currPage}
        setPage={setCurrPage}
        visibleItems={itemsOnOnePage}
      />
    </>
  );
}
