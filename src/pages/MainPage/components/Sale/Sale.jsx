import React from "react";
import { SaleCard } from "../../index";
import "./Sale.scss";

export function Sale({ obj }) {
  const [quantityOfItems, setQuantityOfItems] = React.useState(1);

  return (
    <div className="sale__container">
      <h1 className="blocks__title">Акции</h1>
      <div className="sale__list">
        {quantityOfItems &&
          [...Array(quantityOfItems).keys()].map((_, index) => {
            if (quantityOfItems > index) {
              return (
                <React.Suspense key={index} fallback={<div>hello</div>}>
                  <SaleCard
                    obj={obj}
                    category={"sale"}
                    i={index}
                    setquantity={setQuantityOfItems}
                  />
                </React.Suspense>
              );
            }
          })}
      </div>
    </div>
  );
}
