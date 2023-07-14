import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { TitleFont } from "../../../../style/styling/styling";
import { Slider, ItemCard } from "../../index";

const NewItemsSlider = styled.div`
  min-width: 392px;
  width: 100%;
  margin-right: 24px;
`;

function getNewItems(arr, data) {
  for (let key in data) {
    data[key].items.filter((e) => {
      if (e.new) {
        arr.push({
          [key]: {
            ...data[key],
            items: [e],
          },
        });
      }
    });
  }
  return arr;
}

export function NewItems() {
  const ref = useRef(null);
  const { items } = useSelector((state) => state.clickedCategory.data);
  const [itemWidth, setItemWidth] = useState(0);
  const newItems = [];

  useEffect(() => {
    ref.current && setItemWidth(ref.current.getBoundingClientRect().width);
  }, [ref.current]);

  return (
    <div>
      <TitleFont>Новинки</TitleFont>
      <div>
        <Slider itemWidth={itemWidth} options={{ margin: 24 }}>
          {getNewItems(newItems, items).map((elem, index) => (
            <NewItemsSlider key={index} ref={ref} style={{ width: itemWidth }}>
              <ItemCard obj={elem} i={0} category={Object.keys(elem)[0]} />
            </NewItemsSlider>
          ))}
        </Slider>
      </div>
    </div>
  );
}
