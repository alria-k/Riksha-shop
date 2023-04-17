import { Slider } from "../../../index";
import { ItemCard } from "../../index";
import { NewItemsSlider } from "./NewItemsSlider";

import "./NewItems.scss";

export function NewItems({ obj }) {
  let items = obj.items.read();

  function getNewItems() {
    let newItemsArr = [];
    items.map((elem) => {
      for (let key in elem) {
        elem[key].items.map((e) => {
          if (e.new == true) {
            newItemsArr.push({
              key: key,
              items: e,
            });
          }
        });
      }
    });
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
              <NewItemsSlider key={index}>
                <ItemCard obj={elem.items} imgURL={elem.key} />
              </NewItemsSlider>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
