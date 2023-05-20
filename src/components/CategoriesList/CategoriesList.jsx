import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ItemCard, SaleCard, CategoryPageRedict } from "../index";

const CategoriesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;
  margin-bottom: 50px;
`;

export function CategoriesList({ saleData, goodsData }) {
  const categories = useSelector((state) => state.category.category);

  const [currPage, setCurrPage] = React.useState(1);
  const itemsOnOnePage = 15;

  const [sale] = saleData.read();
  const [items] = goodsData.read();

  React.useEffect(() => {
    setCurrPage(1);
  }, [categories]);

  return (
    <>
      <CategoriesBox>
        {[...Array(itemsOnOnePage).keys()].map((_, index) => {
          return categories == "sale" ? (
            <SaleCard key={index} obj={sale} i={index} />
          ) : (
            <ItemCard key={index} obj={items} i={index} category={categories} />
          );
        })}
      </CategoriesBox>
      {/* <CategoryPageRedict
        activePage={currPage}
        setPage={setCurrPage}
        visibleItems={itemsOnOnePage}
      /> */}
    </>
  );
}
