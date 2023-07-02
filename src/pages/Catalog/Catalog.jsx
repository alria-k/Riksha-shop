import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { Container, Sortby, CategoriesList, Filterby } from "../index";
import { catalogTitle } from "../../style/styling/styling";

const Title = styled.h1`
  ${catalogTitle}
`;

export function Catalog() {
  const [categories, data] = useSelector((state) => [
    state.category.category,
    state.clickedCategory.clickedCategory,
  ]);

  return (
    <div>
      <Container>
        <Title>{data.title}</Title>
        {/* add bread crumbs */}
        <Filterby data={data} />
        <Sortby data={data} />
        {/* <CategoriesList/> */}
        {/* add 'about' component */}
      </Container>
    </div>
  );
}
