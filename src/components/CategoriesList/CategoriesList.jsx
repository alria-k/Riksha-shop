import React from "react";
import { useSelector } from "react-redux";
import { ItemCard, SaleCard, CategoryPageRedict } from "../index";

export function CategoriesList({ obj }) {
  const categories = useSelector((state) => state.category.category);

  const [items] = obj.items.read();
  const [sale] = obj.sale.read();

  const [currPage, setCurrPage] = React.useState(1);
  const itemsOnOnePage = 15;

  React.useEffect(() => {
    setCurrPage(1);
  }, [categories]);

  return (
    <>
      <div className="categories__list">
        {[...Array(itemsOnOnePage).keys()].map((_, index) => {
          return categories == "sale" ? (
            <SaleCard key={index} obj={sale} i={index} />
          ) : (
            <ItemCard key={index} obj={items} i={index} category={categories} />
          );
        })}
      </div>
      {/* <CategoryPageRedict
        activePage={currPage}
        setPage={setCurrPage}
        visibleItems={itemsOnOnePage}
      /> */}
    </>
  );
}
