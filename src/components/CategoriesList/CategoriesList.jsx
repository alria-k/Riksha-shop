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

const itemsOnOnePage = 15;

export function CategoriesList() {
  const categories = useSelector((state) => state.category.category);
  const { items, sale } = useSelector((state) => state.clickedCategory.data);

  const [currPage, setCurrPage] = React.useState(1);

  React.useEffect(() => {
    setCurrPage(1);
  }, [categories]);

  return (
    <>
      <CategoriesBox>
        {(items || sale) &&
          [...Array(itemsOnOnePage).keys()].map((_, index) => {
            return categories == "sale" ? (
              <SaleCard key={index} obj={sale} i={index} />
            ) : (
              <ItemCard
                key={index}
                obj={items}
                i={index}
                category={categories}
              />
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
