import { useDispatch } from "react-redux";

import { Button } from "../Button/Button";
import { addToCart } from "../";

export function OrderBtn({ item, quantity, extraPrice, category }) {
  const dispatch = useDispatch();

  function handlerAddToCart() {
    dispatch(
      addToCart({
        item: item,
        quantity: quantity,
        extraPrice: extraPrice,
        category: category,
      })
    );
  }

  return <Button handler={handlerAddToCart}>Заказать</Button>;
}
