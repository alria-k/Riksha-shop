import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

const CardWrapper = styled.div`
  max-width: 392px;
  width: 100%;
`;
const MainWrapper = styled.div`
  padding: 25px;
`;
const NutritionsWrapper = styled.div`
  max-width: 170px;
  width: 100%;
`;
const TextWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CardSkeleton = () => (
  <CardWrapper>
    <Skeleton height={256} />
    <MainWrapper>
      <NutritionsWrapper>
        <Skeleton />
      </NutritionsWrapper>
      <TextWrapper>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </TextWrapper>
      <PriceWrapper>
        <Skeleton width={60} />
        <Skeleton width={200} />
      </PriceWrapper>
    </MainWrapper>
  </CardWrapper>
);
