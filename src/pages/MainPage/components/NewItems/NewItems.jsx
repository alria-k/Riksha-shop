import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import { TitleFont } from "../../../../style/styling/styling";
import { Slider, ItemCard } from "../../index";

const NewItemsSlider = styled.div`
  min-width: 392px;
  width: 100%;
  margin-right: 24px;
`;

export function NewItems({ goodsData }) {
  const ref = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [items] = goodsData.read();

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

  useEffect(
    () => setItemWidth(ref.current.getBoundingClientRect().width),
    [ref.current]
  );

  return (
    <div>
      <TitleFont>Новинки</TitleFont>
      <div>
        <Slider itemWidth={itemWidth} options={{ margin: 24 }}>
          {newItems.map((elem, index) => (
            <NewItemsSlider key={index} ref={ref} style={{ width: itemWidth }}>
              <ItemCard obj={elem} i={0} category={Object.keys(elem)[0]} />
            </NewItemsSlider>
          ))}
        </Slider>
      </div>
    </div>
  );
}
