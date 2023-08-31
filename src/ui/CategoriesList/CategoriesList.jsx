import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { ItemCard, SaleCard, CategoryPageRedict, CardSkeleton } from "../";

const CategoriesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;
  margin-bottom: 50px;
`;

const itemsOnOnePage = 15;

export function CategoriesList() {
  const categories = useSelector((state) => state.category.category);
  const {
    data: { items, sale },
    loading,
  } = useSelector((state) => state.clickedCategory);

  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    setCurrPage(1);
  }, [categories]);

  return (
    <>
      <CategoriesBox>
        {loading &&
          [...Array(itemsOnOnePage).keys()].map((_, index) =>
            categories == "sale" ? (
              <Skeleton key={index} width={392} height={280} />
            ) : (
              <CardSkeleton key={index} />
            )
          )}
        {!loading &&
          [...Array(itemsOnOnePage).keys()].map((_, index) =>
            categories == "sale" ? (
              <SaleCard key={index} obj={sale} i={index} />
            ) : (
              <ItemCard
                key={index}
                obj={items}
                i={index}
                category={categories}
              />
            )
          )}
      </CategoriesBox>
      {/* <CategoryPageRedict
        activePage={currPage}
        setPage={setCurrPage}
        visibleItems={itemsOnOnePage}
      /> */}
    </>
  );
}
