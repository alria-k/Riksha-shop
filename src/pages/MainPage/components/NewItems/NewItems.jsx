import { Slider, SliderWrapper } from "../../../index";
import { ItemCard } from "../../index";

import "./NewItems.scss";

export function NewItems({ obj }) {
  let [items] = obj.items.read();

  function getNewItems() {
    let newItemsObj = {};
    for (let key in items) {
      items[key].items.filter((e) => {
        if (e.new) {
          newItemsObj = {
            ...newItemsObj,
            [key]: {
              ...items[key],
              items: [e],
            },
          };
        }
      });
    }
    return [newItemsObj];
  }

  let newItems = getNewItems();

  return (
    <div className="new-items__container">
      <h1 className="blocks__title">Новинки</h1>
      <div className="new-items__inner">
        <Slider obj={newItems} options={{ margin: 24 }}>
          {newItems.map((elem, index) => {
            return (
              <SliderWrapper key={index}>
                <ItemCard obj={elem} i={index} />
              </SliderWrapper>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
