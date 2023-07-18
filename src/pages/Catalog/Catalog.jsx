import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  changeCategory,
  Container,
  Sortby,
  CategoriesList,
  Filterby,
  CardSkeleton,
} from "../";
import { catalogTitle } from "../../style/styling/styling";

const Title = styled.h1`
  ${catalogTitle}
`;

export function Catalog() {
  const { category } = useParams();
  const dispatch = useDispatch();

  const {
    data: { items, sale },
    loading,
  } = useSelector((state) => state.clickedCategory);

  const data = { ...items, ...sale };

  useEffect(() => {
    dispatch(changeCategory(category));
  }, [items, sale]);

  return (
    <div>
      <Container>
        {loading && <CardSkeleton />}
        {!loading && (
          <>
            <Title>{data[category] && data[category].title}</Title>
            {/* /* add bread crumbs */}
            {data[category].categories && <Filterby data={data[category]} />}
            {data[category].sortby && <Sortby data={data[category]} />}
            <CategoriesList />
            {/* /* add 'about' component */}
          </>
        )}
      </Container>
    </div>
  );
}
