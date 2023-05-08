import React from "react";
import "./Price.scss";

export function Price({ item, price, setPrice, quantity = 1 }) {
  React.useEffect(() => {
    setPrice(item.price);
  }, [item]);

  return item.sale ? (
    <h2 className="purchase__price">
      <span className="purchase__old-price">{price * quantity} ₽</span>
      {Math.round(quantity * price - (price / 100) * item.sale)} ₽
    </h2>
  ) : (
    <h2 className="purchase__price">{price * quantity} ₽</h2>
  );
}
