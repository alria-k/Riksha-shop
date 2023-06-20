import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { Container, Sortby, CategoriesList, Filterby } from "../index";
import { CatalogTitle } from "../../style/styling/styling";

const Title = styled.h1`
  ${CatalogTitle}
`;

export function Catalog({ data }) {
  const categories = useSelector((state) => state.category.category);

  const [items] = data.items.read();

  return (
    <div>
      <Container>
        <Title>{items[categories].title}</Title>
        {/* add bread crumbs */}
        <React.Suspense fallback={<div>hello</div>}>
          <Filterby obj={data} />
        </React.Suspense>
        <React.Suspense fallback={<div>hello</div>}>
          <Sortby obj={data} />
        </React.Suspense>
        <React.Suspense fallback={<div>hello</div>}>
          <CategoriesList obj={data} />
        </React.Suspense>
        {/* add 'about' component */}
      </Container>
    </div>
  );
}
