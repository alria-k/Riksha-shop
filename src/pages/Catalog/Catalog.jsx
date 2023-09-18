import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";

import {
  changeCategory,
  Container,
  Sortby,
  CategoriesList,
  Filterby,
} from "../";
import { catalogTitle } from "../../style/styling/styling";

const Title = styled.h1`
  ${catalogTitle}
`;
const StyledSkeletonTitile = styled(Skeleton)`
  margin-bottom: 50px;
`;

export function Catalog() {
  const { category } = useParams();
  const dispatch = useDispatch();

  const {
    data: { items },
    loading,
  } = useSelector((state) => state.clickedCategory);

  useEffect(() => {
    dispatch(changeCategory(category));
  }, [loading]);

  return (
    <div>
      <Container>
        {loading && (
          <>
            <StyledSkeletonTitile height={50} width={300} />
          </>
        )}
        {!loading && (
          <>
            <Title>{items[category].title}</Title>
            {/* /* add bread crumbs */}
            {items[category].categories && <Filterby data={items[category]} />}
            {items[category].sortby && <Sortby data={items[category]} />}
            {/* /* add 'about' component */}
          </>
        )}
        <CategoriesList />
      </Container>
    </div>
  );
}
