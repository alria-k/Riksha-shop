import React from "react";
import "./SaleCard.scss";

export function SaleCard({ obj, i }) {
  let currentItem = obj.sale.items[i];

  return (
    i < obj.sale.items.length && (
      <a className="sale-card__link" href="#f">
        <div
          className="sale-card__item"
          style={{
            backgroundImage: `url(/src/assets/img/categories/sale/${currentItem.bg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h1 className="sale-card__title">{currentItem.title}</h1>
          <p className="sale-card__discr">{currentItem.text}</p>
        </div>
      </a>
    )
  );
}
