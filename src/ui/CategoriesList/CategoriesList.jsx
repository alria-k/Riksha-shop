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

export function CategoriesList() {
  const [currPage, setCurrPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  const categories = useSelector((state) => state.category.category);
  const {
    data: { items },
    loading,
  } = useSelector((state) => state.clickedCategory);

  const itemsOnOnePage = 15;
  let lastItemIndex = currPage * itemsOnOnePage;
  let firstItemIndex = lastItemIndex - itemsOnOnePage;

  useEffect(() => {
    setCurrPage(1);
  }, [categories]);

  useEffect(() => {
    !loading &&
      setCurrentItems(
        items[categories].items.slice(firstItemIndex, lastItemIndex)
      );
  }, [currPage, loading, categories]);

  return (
    <>
      <CategoriesBox>
        {loading &&
          [...Array(itemsOnOnePage).keys()].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        {!loading &&
          currentItems.map((currentItem, index) => (
            <ItemCard key={index} obj={currentItem} category={categories} />
          ))}
      </CategoriesBox>
      {!loading && (
        <CategoryPageRedict
          allItems={items[categories].items.length}
          activePage={currPage}
          setPage={setCurrPage}
          visibleItems={itemsOnOnePage}
        />
      )}
    </>
  );
}
