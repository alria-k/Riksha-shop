import styled from "styled-components";

import { TitleFont } from "../../../../style/styling/styling";
import { Slider, SliderWrapper, ItemCard } from "../../index";

const NewItemsWrapper = styled.div`
  .slider-wrapper {
    min-width: 392px;
    width: 100%;
    margin-right: 24px;
  }
`;

export function NewItems({ goodsData }) {
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

  return (
    <NewItemsWrapper>
      <TitleFont>Новинки</TitleFont>
      <div>
        <Slider obj={newItems} options={{ margin: 24 }}>
          {newItems.map((elem, index) => (
            <SliderWrapper key={index}>
              <ItemCard obj={elem} i={0} category={Object.keys(elem)[0]} />
            </SliderWrapper>
          ))}
        </Slider>
      </div>
    </NewItemsWrapper>
  );
}
