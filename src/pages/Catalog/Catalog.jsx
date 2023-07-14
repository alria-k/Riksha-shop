import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { changeCategory } from "../";
import { Container, Sortby, CategoriesList, Filterby } from "../index";
import { catalogTitle } from "../../style/styling/styling";

const Title = styled.h1`
  ${catalogTitle}
`;

export function Catalog() {
  const { category } = useParams();
  const { items, sale } = useSelector((state) => state.clickedCategory.data);
  const dispatch = useDispatch();

  const data = { ...items, ...sale };

  useEffect(() => {
    dispatch(changeCategory(category));
  }, [items, sale]);

  return (
    <div>
      <Container>
        {items && sale && (
          <>
            <Title>{data[category] && data[category].title}</Title>
            {/* /* add bread crumbs */}
            {data[category].category && <Filterby data={data[category]} />}
            {data[category].sortby && <Sortby data={data[category]} />}
            <CategoriesList />
            {/* /* add 'about' component */}
          </>
        )}
      </Container>
    </div>
  );
}
