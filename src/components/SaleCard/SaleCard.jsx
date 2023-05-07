import React from "react";
import "./SaleCard.scss";

export function SaleCard({ obj, category, i, setquantity }) {
  const [sale] = obj.sale.read();

  let currentItem = category == "sale" && sale[category].items[i];

  React.useEffect(() => {
    if (!currentItem) {
      return;
    }
    setquantity(sale[category].items.length);
  }, [currentItem]);

  return (
    category == "sale" && (
      <a key={currentItem.id} className="sale-card__link" href="#f">
        <div
          className="sale-card__item"
          style={{
            backgroundImage: `url(/src/assets/img/categories/${
              Object.keys(sale)[0]
            }/${currentItem.bg})`,
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
