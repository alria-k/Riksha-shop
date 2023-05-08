import React from "react";
import "./Sizes.scss";

export function Sizes({ item, price, setPrice }) {
  const [extraPrice, setExtraPrice] = React.useState(0);
  const [checked, setChecked] = React.useState(0);

  function handleChange(event, priceVal, i) {
    if (event.target.checked) {
      setChecked(i);
      setExtraPrice(priceVal);
      setPrice(item.price);
    }
    return;
  }

  React.useEffect(() => {
    setPrice(price + extraPrice);
  }, [extraPrice]);

  React.useEffect(() => {
    setChecked(0);
    setExtraPrice(0);
  }, [item.price]);

  return item.sizes ? (
    <div className="size-btns__box">
      <div className="size-pizza__extra-pay">+{extraPrice} ₽</div>
      {item.sizes.map((elem, index) => {
        return (
          <form key={index} className="size-pizza__box">
            <input
              checked={index == checked}
              onChange={(e) => handleChange(e, elem.extraPay, index)}
              type="radio"
              name="size-pizza"
              className="size-pizza__radio"
            />
            <label htmlFor="size-pizza" className="size-pizza__custom">
              {elem.cm} см
            </label>
          </form>
        );
      })}
    </div>
  ) : (
    ""
  );
}
