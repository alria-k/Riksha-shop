import { Slider, SliderWrapper } from "../../../index";
import { ItemCard } from "../../index";

import "./NewItems.scss";

export function NewItems({ obj }) {
  let [items] = obj.items.read();

  function getNewItems() {
    let newItemsArr = [];
    for (let key in items) {
      items[key].items.map((e) => {
        if (e.new == true) {
          newItemsArr.push({
            category: key,
            items: e,
          });
        }
      });
    }
    return newItemsArr.flat();
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
                <ItemCard
                  obj={elem.items}
                  imgURL={elem.category}
                  category={elem.category}
                />
              </SliderWrapper>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
