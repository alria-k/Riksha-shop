import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { ItemCard, CategoryPageRedict, CardSkeleton } from "../";

const CategoriesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;
  margin-bottom: 50px;
`;

export function CategoriesList({ filter }) {
  const [currPage, setCurrPage] = useState(1);
  let itemsArr = [];

  const categories = useSelector((state) => state.category.category);
  const {
    data: { items },
    loading,
  } = useSelector((state) => state.clickedCategory);

  const itemsOnOnePage = 15;
  let lastItemIndex = currPage * itemsOnOnePage;
  let firstItemIndex = lastItemIndex - itemsOnOnePage;

  if (!loading && filter) {
    itemsArr = items[categories].items.filter(
      (elem) => elem.category == filter
    );
  } else if (!loading) {
    itemsArr = items[categories].items;
  }

  useEffect(() => {
    setCurrPage(1);
  }, [categories, filter]);

  return (
    <>
      <CategoriesBox>
        {loading &&
          [...Array(itemsOnOnePage).keys()].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        {!loading &&
          itemsArr
            .slice(firstItemIndex, lastItemIndex)
            .map((currentItem, index) => (
              <ItemCard
                key={index}
                obj={currentItem}
                category={categories}
                itemLink={currentItem.link}
              />
            ))}
      </CategoriesBox>
      {!loading && (
        <CategoryPageRedict
          allItems={itemsArr.length}
          activePage={currPage}
          setPage={setCurrPage}
          visibleItems={itemsOnOnePage}
        />
      )}
    </>
  );
}
