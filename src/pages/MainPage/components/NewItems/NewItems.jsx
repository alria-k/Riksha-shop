import { Slider, SliderWrapper, ItemCard, getGoods } from "../../index";

import "./NewItems.scss";

export function NewItems() {
  const [items] = getGoods().read();

  console.log(items);

  function getNewItems() {
    let newItemsObj = [];
    for (let key in items) {
      items[key].items.filter((e) => {
        if (e.new) {
          newItemsObj.push({
            [key]: {
              ...items[key],
              items: [e],
            },
          });
        }
      });
    }
    return newItemsObj;
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
                <ItemCard obj={elem} i={0} category={Object.keys(elem)[0]} />
              </SliderWrapper>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
